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
    
    var pet: Pet!
    
    lazy var vaccineCellDelegate = VaccineCellDelegate(tableView: tableView, viewController: self)
    lazy var vaccineCellDataSource = VaccineCellDataSource(tableView: tableView, viewController: self)
    
    override func viewDidLoad() {
        super.viewDidLoad()
        setUp()
    }
    
    func setUp() {
        vaccineCellDataSource.fetch(pet: pet, vaccineCellDelegate: vaccineCellDelegate)
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
