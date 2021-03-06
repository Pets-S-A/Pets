//
//  DetailPetViewController.swift
//  pets
//
//  Created by Matheus Silva on 25/03/20.
//  Copyright © 2020 Matheus Gois. All rights reserved.
//

import UIKit

class DetailPetViewController: UIViewController {

    @IBOutlet weak var tableView: UITableView!
    @IBOutlet weak var imageView: UIImageView!
    @IBOutlet weak var nameLabel: UILabel!
    @IBOutlet weak var ageLabel: UILabel!
    @IBOutlet weak var genderLabel: UILabel!
    @IBOutlet weak var agressiveLabel: UILabel!
    @IBOutlet weak var breedLabel: UILabel!
    var pet: Pet!
    var petImage: UIImage?

    lazy var vaccineCellDelegate = VaccineCellDelegate(tableView: tableView, viewController: self)
    lazy var vaccineCellDataSource = VaccineCellDataSource(tableView: tableView, viewController: self)

    override func viewDidLoad() {
        super.viewDidLoad()
        setUp()
        intialSetUp()
    }

    func setUp() {
        vaccineCellDataSource.fetch(pet: pet, vaccineCellDelegate: vaccineCellDelegate)
        registerEvents()
    }
    func intialSetUp() {
        imageView.image = petImage
        nameLabel.text = pet.name
        ageLabel.text = pet.age
        genderLabel.text = pet.gender
        agressiveLabel.text = pet.agressive ? "Sim" : "Não"
        breedLabel.text = pet.breed
    }
    func registerEvents() {
        EventManager.shared.listenTo(eventName: "reloadCommonData") {
            DispatchQueue.main.async {
                guard let pet = CommonData.shared.user.person?.pets?.first(
                    where: { self.pet._id == $0._id }) else {
                    fatalError("Pet not found")
                }
                self.pet = pet
                self.vaccineCellDataSource.fetch(pet: self.pet,
                                                 vaccineCellDelegate: self.vaccineCellDelegate)
            }
        }
        EventManager.shared.listenTo(eventName: "updatePet") { pet in
            DispatchQueue.main.async {
                guard let pet = pet as? Pet else {
                    fatalError("Not is Pet")
                }
                self.pet = pet
                self.vaccineCellDataSource.fetch(pet: self.pet,
                                                 vaccineCellDelegate: self.vaccineCellDelegate)
            }
        }
        EventManager.shared.listenTo(eventName: "reloadCreatePetCommonData") { (answer) in
            DispatchQueue.main.async {
                guard let pet = answer as? Pet else {
                    fatalError("Pet not found")
                }
                self.pet = pet
                self.vaccineCellDataSource.fetch(pet: self.pet,
                                                 vaccineCellDelegate: self.vaccineCellDelegate)
            }
        }
        EventManager.shared.listenTo(eventName: "reloadDeleteVaccine") {
            DispatchQueue.main.async {
                guard let pet = CommonData.shared.user.person?.pets?.first(where: { (petV) -> Bool in
                    return self.pet._id == petV._id
                }) else {
                    fatalError("Pet not found")
                }
                self.pet = pet
                self.vaccineCellDataSource.fetch(pet: self.pet,
                vaccineCellDelegate: self.vaccineCellDelegate)
            }
        }
        EventManager.shared.listenTo(eventName: "reloadImagePet") { (answer) in
            DispatchQueue.main.async {
                if let image = answer as? UIImage {
                    self.petImage = image
                }
                self.intialSetUp()
            }
        }
    }
    func delete() {
        showSpinner(onView: view)
        PetHandler.delete(id: pet._id) { (response) in
            DispatchQueue.main.async {
                self.removeSpinner()
                switch response {
                case .success(let answer):
                    print(answer)
                    self.pet.delete()
                    EventManager.shared.trigger(eventName: "reloadDeletePet")
                    self.showCustomAlert(title: "Pet deletado",
                                         message: "Seu Pet foi deletado com sucesso!",
                                         isOneButton: true) { (_) in
                        self.dismiss(animated: true, completion: nil)
                        self.dismiss(animated: true, completion: nil)
                    }
                case .error(let description):
                    self.showCustomAlert(title: "Error", message: description, isOneButton: true) { (_) in }
                }
            }
        }
    }
    @IBAction func sharePet() {
        showSpinner(onView: view)
        PetHandler.share(id: pet._id) { (response) in
            DispatchQueue.main.async {
                self.removeSpinner()
                switch response {
                case .success(let answer):
                    self.showCustomAlert(title: "Compartilhe!", message: answer, isOneButton: true) { (_) in }
                case .error(let description):
                    self.showCustomAlert(title: "Error", message: description, isOneButton: true) { (_) in }
                }
            }
        }
    }
    @IBAction func deletePet() {
        self.showCustomAlert(title: "Atenção",
                             message: "Essa operação é irrevercivel, tem certeza que deseja deletar?",
                             isOneButton: false) { (answer) in
            switch answer {
            case true:
                self.delete()
            case false:
                break
            }
        }
    }

    override func prepare(for segue: UIStoryboardSegue, sender: Any?) {
        if let view = segue.destination as? CreateVaccineViewController {
            view.pet = pet
            if let vaccine = sender as? Vaccine {
                view.vaccine = vaccine
            }
        } else if let view = segue.destination as? PetCreateViewController {
            view.pet = pet
            view.petUIImage = imageView.image
            view.isUpdate = true
        }
    }
}
