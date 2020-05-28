//
//  PetCreateViewController.swift
//  pets
//
//  Created by Matheus Silva on 01/03/20.
//  Copyright © 2020 Matheus Gois. All rights reserved.
//

import UIKit

class PetCreateViewController: UIViewController {
    @IBOutlet weak var petImage: UIImageView!
    @IBOutlet weak var petName: UITextField!
    @IBOutlet weak var petBreed: UITextField!
    @IBOutlet weak var petAge: UIPickerView!
    @IBOutlet weak var petGender: UIPickerView!
    @IBOutlet weak var petAgressive: UISwitch!

    lazy var genderDataSource = GenderDataSource(pickerPerson: petGender, viewController: self)
    lazy var genderDelegate = GenderDelegate(pickerPerson: petGender, viewController: self)

    lazy var ageDataSource = AgeDataSource(pickerPerson: petAge, viewController: self)
    lazy var ageDelegate = AgeDelegate(pickerPerson: petAge, viewController: self)

    lazy var genderSelected = genderDataSource.options[0]
    lazy var ageSelected  = ageDataSource.options[0]

    var agressive = false
    var imageName = ""

    var isUpdate = false

    var user: User!
    var pet: Pet?
    var petUIImage: UIImage?

    var mainDelegate: MainProtocol?

    override func viewDidLoad() {
        super.viewDidLoad()
        config()
    }

    func config() {
        configGender()
        configAge()
        setupKeyboard()
        preSetUp()
    }

    func configGender() {
        petGender.delegate = genderDelegate
        petGender.dataSource = genderDataSource
    }

    func configAge() {
        petAge.delegate = ageDelegate
        petAge.dataSource = ageDataSource
    }

    func preSetUp() {
        if let pet = pet {
            petImage.image = petUIImage
            petName.text = pet.name
            petBreed.text = pet.breed
            if let indexAge = ageDataSource.options.firstIndex(of: pet.age) {
                petAge.selectRow(indexAge, inComponent: 0, animated: true)
            }
            if let indexGender = genderDataSource.options.firstIndex(of: pet.gender) {
                petGender.selectRow(indexGender, inComponent: 0, animated: true)
            }
            petAgressive.isOn = pet.agressive
        }
    }

    // MARK: - Actions
    @IBAction func create() {
        self.showSpinner(onView: self.view)

        let date = Date().description.getFirst()
        let nameImage = "pet_\(Int.random(in: 0...100000000))_\(date).png"
        imageName = ImageHandler.url + nameImage

        ImageHandler.uploadRequest(imagemT: petImage.image, name: nameImage) { (response) in
            switch response {
            case .success(let result):
                if result {
                    if self.isUpdate {
                        self.updatePet()
                    } else {
                        self.createPet()
                    }
                } else {
                    self.showCustomAlert(title: "Erro ao subir a imagem",
                                         message: "Verifique sua conexão com a internet e tente novamente",
                                         isOneButton: true) { (_) in }
                    self.removeSpinner()
                }

            case .error(let description):
                self.showCustomAlert(title: "Erro ao subir a imagem",
                                     message: description,
                                     isOneButton: true) { (_) in }
                self.removeSpinner()
            }
        }

    }

    func createPet() {
        DispatchQueue.main.async {
            PetHandler.create(params: self.formatPet().dictionaryRepresentation) { (response) in
                switch response {
                case .error(let description):
                    DispatchQueue.main.async {
                        self.removeSpinner()
                        self.showCustomAlert(title: "Erro ao cadastrar o Pet",
                                             message: description,
                                             isOneButton: true) { (_) in }
                    }
                case .success(let pet):
                    DispatchQueue.main.async {
                        self.mainDelegate?.reloadData()
                        if var pets = CommonData.shared.user.person?.pets {
                            pets.append(pet)
                            CommonData.shared.user.person?.pets = pets
                        }
                        self.removeSpinner()
                        self.showCustomAlert(title: "Pet cadastrado com sucesso!",
                                            message: "Agora você pode adicionar vacinas para ele.",
                                            isOneButton: true) { (_) in
                            self.dismiss(animated: true, completion: nil)
                            self.dismiss(animated: true, completion: nil)
                        }
                    }
                }
            }
        }
    }

    func updatePet() {
        DispatchQueue.main.async {
            PetHandler.update(pet: self.formatPet()) { (response) in
                switch response {
                case .error(let description):
                    DispatchQueue.main.async {
                        self.removeSpinner()
                        self.showCustomAlert(title: "Erro ao atualizar o Pet",
                                             message: description,
                                             isOneButton: true) { (_) in }
                    }
                case .success(let pet):
                    DispatchQueue.main.async {
                        if
                            var pets = CommonData.shared.user.person?.pets,
                            let index = pets.firstIndex(where: { $0._id == pet._id }) {
                            pets[index] = pet
                            CommonData.shared.user.person?.pets = pets
                            EventManager.shared.trigger(eventName: "reloadImagePet", information: self.petImage.image)
                        }
                        self.removeSpinner()
                        self.showCustomAlert(title: "Pet atualizado com sucesso!",
                                            message: "Agora você pode adicionar vacinas para ele.",
                                            isOneButton: true) { (_) in
                            self.dismiss(animated: true, completion: nil)
                            self.dismiss(animated: true, completion: nil)
                        }
                    }
                }
            }
        }
    }
    @IBAction func changeStatusAgressive(_ sender: UISwitch) {
        agressive = sender.isOn
    }

    // MARK: - Ultils
    func formatPet() -> Pet {

        let pet = Pet(_id: self.pet?._id ?? "",
                      name: self.petName.text ?? "",
                      age: self.ageSelected,
                      gender: self.genderSelected,
                      agressive: self.agressive,
                      image: self.imageName,
                      breed: self.petBreed.text ?? "")
        return pet

    }

    // MARK: - IMAGE
    @IBAction func loadImage() {
        ImagePickerManager().pickImage(self) { image in
            self.petImage.image = image
        }
    }
}
