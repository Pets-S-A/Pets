//
//  RegisterPersonViewController.swift
//  pets
//
//  Created by Matheus Silva on 10/03/20.
//  Copyright © 2020 Matheus Gois. All rights reserved.
//

import UIKit

class RegisterPersonViewController: UIViewController {

    @IBOutlet weak var imageView: UIImageView!
    @IBOutlet weak var nameText: UITextField!
    @IBOutlet weak var button: UIButton!
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
                    UIAlert.show(controller: self,
                                 title: "Não foi possível fazer criar um usuário!",
                                 message: description) { (_) in }
                    self.removeSpinner()
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
                    UIAlert.show(controller: self, title: "Não foi possível fazer atualizar o usuário!",
                                 message: description) { (_) in }
                    self.removeSpinner()
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
                        self.showAlert(title: "Erro ao subir a imagem", message: "Sem descrição!")
                        self.removeSpinner()
                    }
                }

            case .error(let description):
                DispatchQueue.main.async {
                    self.showAlert(title: "Erro ao subir a imagem", message: description)
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
            if self.imageHasChange {
                self.uploadImage()
            } else {
                if self.isProfileEdition {
                    self.uploadImage()
                } else {
                    self.createPerson()
                }
            }
        }
    }
}
