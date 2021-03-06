//
//  RegisterPersonViewController.swift
//  pets
//
//  Created by Matheus Silva on 10/03/20.
//  Copyright © 2020 Matheus Gois. All rights reserved.
//

import UIKit

class RegisterPersonViewController: UIViewController {

    @IBOutlet private weak var imageView: UIImageView!
    @IBOutlet private weak var nameText: UITextField!
    @IBOutlet private weak var button: UIButton!
    @IBOutlet private weak var deleteButton: UIButton!
    private var imageName = ""
    public var isProfileEdition = false
    public var imageProfile: UIImage?
    private var imageHasChange = false

    override func viewDidLoad() {
        super.viewDidLoad()
        setUp()
    }

    func setUp() {
        loadPreview()
        setUpDelete()
    }

    private func loadPreview() {
        if let person = CommonData.shared.user.person {
            nameText.text = person.name
        } else {
            print("User not defined")
        }
        if isProfileEdition {
            button.setTitle("Atualizar", for: .normal)
            self.imageView.image = imageProfile
        }
    }

    func setUpDelete() {
        if isProfileEdition {
            deleteButton.isHidden = false
            deleteButton.addTarget(self, action: #selector(deleteUser), for: .touchUpInside)
        }
    }

    func formartPerson() -> Person {
        if isProfileEdition {
            if let person = CommonData.shared.user.person {
                return Person(_id: person._id,
                    name: nameText.text ?? "",
                    image: imageName, pets: nil)
            }
        }
        return Person(_id: nil,
                name: nameText.text ?? "",
                image: imageName, pets: nil)

    }

    func createPerson() {
        let person = formartPerson()
        PersonHandler.create(person: person) { (response) in
            switch response {
            case .success(let answer):
                DispatchQueue.main.async {
                    CommonData.shared.user.person = answer
                    self.performSegue(withIdentifier: "toMain", sender: nil)
                    self.removeSpinner()
                }
            case .error(let description):
                DispatchQueue.main.async {
                    self.removeSpinner()
                    self.showCustomAlert(title: "Não foi possível fazer criar um usuário!",
                                         message: description,
                                         isOneButton: true) { (_) in }
                }
            }
        }
    }
    func updatePerson() {
        let person = formartPerson()
        PersonHandler.update(person: person) { (response) in
            switch response {
            case .success(let answer):
                DispatchQueue.main.async {
                    CommonData.shared.user.person = answer
                    self.back()
                    EventManager.shared.trigger(eventName: "reloadImage", information: self.imageView.image)
                    EventManager.shared.trigger(eventName: "reloadImage", information: self.nameText.text)
                    self.removeSpinner()
                }
            case .error(let description):
                DispatchQueue.main.async {
                    self.removeSpinner()
                    self.showCustomAlert(title: "Não foi possível fazer atualizar o usuário!",
                                         message: description,
                                         isOneButton: true) { (_) in }
                }
            }
        }
    }
    @objc private
    func deleteUser() {
        self.showCustomAlert(title: "Deletar Conta",
                             message: "Essa ação não terá retorno, tem certaza que deseja conntinuar?",
                             isOneButton: false) { (answer) in
            if answer {
                self.showSpinner(onView: self.view)
                UserHandler.delete { (response) in
                    DispatchQueue.main.async {
                        self.removeSpinner()
                        switch response {
                        case .success:
                            self.performSegue(withIdentifier: "toLogin", sender: nil)
                        case .error(let description):
                            self.showCustomAlert(title: "Algo deu errado",
                                                 message: description,
                                                 isOneButton: true) { (_) in }
                        }
                    }

                }
            }
        }
    }

    func uploadImage() {
        let date = Date().description.getFirst()
        let nameImage = "person_\(Int.random(in: 0...100000000))_\(date).png"
        imageName = ImageHandler.url + nameImage

        ImageHandler.uploadRequest(imagemT: imageView.image, name: nameImage) { (response) in
            switch response {
            case .success(let result):
                if result {
                    DispatchQueue.main.async {
                        if self.isProfileEdition {
                            self.updatePerson()
                        } else {
                            self.createPerson()
                        }
                    }
                } else {
                    DispatchQueue.main.async {
                        self.showCustomAlert(title: "Erro ao subir a imagem",
                                             message: "Sem descrição!", isOneButton: true) { (_) in }
                        self.removeSpinner()
                    }
                }

            case .error(let description):
                DispatchQueue.main.async {
                    self.showCustomAlert(title: "Erro ao subir a imagem",
                                         message: description, isOneButton: true) { (_) in }
                    self.removeSpinner()
                }
            }
        }
    }

    // MARK: - Actions
    @IBAction func loadImage() {
        ImagePickerManager().pickImage(self) { image in
            self.imageView.image = image
            self.imageHasChange = true
        }
    }

    @IBAction func finishRegister() {
        showSpinner(onView: view)
        DispatchQueue.main.async {
            self.uploadImage()
        }
    }
    @IBAction func exitButtonAction(_ sender: Any) {
        self.performSegue(withIdentifier: "toLogin", sender: nil)
    }
}
