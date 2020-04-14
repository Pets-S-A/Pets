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
        EventManager.shared.listenTo(eventName: "reloadDeletePet") {
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

    override func prepare(for segue: UIStoryboardSegue, sender: Any?) {
        if let view = segue.destination as? CreateVaccineViewController {
            view.pet = pet
            if let vaccine = sender as? Vaccine {
                view.vaccine = vaccine
            }
        }
    }
}
