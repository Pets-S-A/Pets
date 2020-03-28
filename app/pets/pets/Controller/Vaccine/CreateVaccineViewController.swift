//
//  CreateVaccineViewController.swift
//  pets
//
//  Created by Matheus Silva on 25/03/20.
//  Copyright © 2020 Matheus Gois. All rights reserved.
//

import UIKit

class CreateVaccineViewController: UIViewController {
    @IBOutlet weak var name: UITextField!
    @IBOutlet weak var datePicker: UIDatePicker!
    var pet: Pet!
    var vaccine: Vaccine?
    
    override func viewDidLoad() {
        super.viewDidLoad()
        
    }
    
    
    func formatVaccine() -> Vaccine {
        guard let name = name.text else {
            fatalError("Without name")
        }
        let date = datePicker.date.description
        
        return Vaccine(_id: nil, name: name, date: date)
    }
    
    func createVaccine() {
        VaccineHandler.create(params: formatVaccine().dictionaryRepresentation(pet: pet)) { (response) in
            switch response {
            case .error(let description):
                NSLog(description)
            case .success(let answer):
                self.pet.addVaccine(vaccine: answer)
                self.back()
            }
        }
    }
    //MARK:- ACTIONS
    @IBAction func create() {
        createVaccine()
    }
}

