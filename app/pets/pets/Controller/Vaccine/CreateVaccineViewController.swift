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
        setUp()
    }
    
    func setUp() {
        setUpEdition()
    }
    
    func setUpEdition() {
        if let vaccine = self.vaccine {
            self.name.text = vaccine.name
            self.datePicker.date = Date(withString: vaccine.date)
        }
    }
    
    func formatVaccine() -> Vaccine {
        guard let name = name.text else {
            fatalError("Without name")
        }
        let date = datePicker.date.description
        
        return Vaccine(_id: vaccine?._id, name: name, date: date)
    }
    
    func createVaccine() {
        VaccineHandler.create(params: formatVaccine().dictionaryRepresentation(pet: pet)) { (response) in
            switch response {
            case .error(let description):
                self.showAlert(title: "Error", message: description)
            case .success(let answer):
                DispatchQueue.main.async {
                    self.pet.addVaccine(vaccine: answer)
                    EventManager.shared.trigger(eventName: "reloadCommonData")
                    self.back()
                }
            }
        }
    }
    
    func updateVaccine() {
        VaccineHandler.update(vaccine: formatVaccine()) { (response) in
            switch response {
            case .error(let description):
                self.showAlert(title: "Error", message: description)
            case .success(let answer):
                DispatchQueue.main.async {
                    self.pet.updateVaccine(vaccine: answer)
                    EventManager.shared.trigger(eventName: "reloadCommonData")
                    self.back()
                }
            }
        }
    }
    
    //MARK:- ACTIONS
    @IBAction func create() {
        if vaccine != nil {
            updateVaccine()
        } else {
            createVaccine()
        }
    }
}

