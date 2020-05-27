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
    func createNotification() {
        let time = datePicker.date.timeIntervalSinceNow > 0 ? datePicker.date.timeIntervalSinceNow : 10
        Notification.send(titulo: "Vacinação do \(pet.name)",
            subtitulo: datePicker.date.getTime(),
            mensagem: "Hoje é a vacinação do seu Pet 😊",
            identificador: pet._id,
            timeInterval: time)
    }
    func createVaccine() {
        VaccineHandler.create(params: formatVaccine().dictionaryRepresentation(pet: pet)) { (response) in
            self.removeSpinner()
            switch response {
            case .error(let description):
                DispatchQueue.main.async {
                    self.showCustomAlert(title: "Error",
                                         message: description, isOneButton: true) { (_) in }
                }
            case .success(let answer):
                DispatchQueue.main.async {
                    self.createNotification()
                    self.pet.addVaccine(vaccine: answer)
                    EventManager.shared.trigger(eventName: "reloadCommonData")
                    self.back()
                }
            }
        }
    }

    func updateVaccine() {
        VaccineHandler.update(vaccine: formatVaccine()) { (response) in
            self.removeSpinner()
            switch response {
            case .error(let description):
                DispatchQueue.main.async {
                    self.showCustomAlert(title: "Error", message: description, isOneButton: true) { (_) in }
                }
            case .success(let answer):
                DispatchQueue.main.async {
                    self.pet.updateVaccine(vaccine: answer)
                    EventManager.shared.trigger(eventName: "reloadCommonData")
                    self.back()
                }
            }
        }
    }

    // MARK: - ACTIONS
    @IBAction func create() {
        showSpinner(onView: view)
        if vaccine != nil {
            updateVaccine()
        } else {
            createVaccine()
        }
    }
}
