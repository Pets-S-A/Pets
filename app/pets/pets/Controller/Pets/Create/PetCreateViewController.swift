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

    var user: User!

    var mainDelegate: MainProtocol?

    override func viewDidLoad() {
        super.viewDidLoad()
        config()
    }

    func config() {
        configGender()
        configAge()
        setupKeyboard()
    }

    func configGender() {
        petGender.delegate = genderDelegate
        petGender.dataSource = genderDataSource
    }

    func configAge() {
        petAge.delegate = ageDelegate
        petAge.dataSource = ageDataSource
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
                    self.uploadPet()
                } else {
                    self.showAlert(title: "Erro ao subir a imagem", message: "Sem descrição!")
                    self.removeSpinner()
                }

            case .error(let description):
                self.showAlert(title: "Erro ao subir a imagem", message: description)
                self.removeSpinner()
            }
        }

    }

    func uploadPet() {
        DispatchQueue.main.async {
            PetHandler.create(params: self.formatPet().dictionaryRepresentation) { (response) in
                switch response {
                case .error(let description):
                    DispatchQueue.main.async {
                        UIAlert.show(controller: self,
                                     title: "Não foi possível cadastrar o pet, tente novamente!",
                                     message: description) { (_) in }
                        self.removeSpinner()
                    }
                case .success:
                    DispatchQueue.main.async {
                        self.mainDelegate?.reloadData()
                        UIAlert.show(controller: self, title: "Pet cadastrado com sucesso!", message: "") { (_) in
                            self.dismiss(animated: true, completion: nil)
                        }
                        self.removeSpinner()
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

        let pet = Pet(_id: "",
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
