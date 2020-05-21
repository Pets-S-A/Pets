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
    }
    func delete() {
        showSpinner(onView: view)
        PetHandler.delete(id: pet._id) { (response) in
            DispatchQueue.main.async {
                self.removeSpinner()
                switch response {
                case .success(let answer):
                    answer.delete()
                    EventManager.shared.trigger(eventName: "reloadDeletePet")
                    UIAlert.show(controller: self, title: "Pet deletado com sucesso!", message: "") { (_) in
                        self.dismiss(animated: true, completion: nil)
                    }
                case .error(let description):
                    self.showAlert(title: "Error", message: description)
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
                    self.showAlert(title: "Compartilhe!", message: answer)
                case .error(let description):
                    self.showAlert(title: "Error", message: description)
                }
            }
        }
    }
    @IBAction func deletePet() {
        UIAlert.show(controller: self,
                     title: "Alerta!",
                     message: "Tem certeza que deseja deletar?",
                     alertAction1: "Deletar") { (answer) in
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
        }
    }
}
