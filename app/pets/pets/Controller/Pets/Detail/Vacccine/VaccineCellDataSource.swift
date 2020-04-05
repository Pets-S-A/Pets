//
//  VaccineCellDataSource.swift
//  vaccines
//
//  Created by Matheus Silva on 26/03/20.
//  Copyright © 2020 Matheus Gois. All rights reserved.
//

import UIKit


class VaccineCellDataSource: NSObject, UITableViewDataSource {
    
    var pet: Pet!
    var vaccines = Vaccines()
    
    weak var viewController: UIViewController?
    weak var tableView: UITableView?
    
    
    init(tableView: UITableView, viewController: UIViewController) {
        super.init()
        self.viewController = viewController
        self.register(tableView: tableView)
        
        self.tableView = tableView
        tableView.dataSource = self
    }
    
    func fetch(pet: Pet, vaccineCellDelegate: VaccineCellDelegate) {
        self.pet = pet
        self.vaccines = pet.vaccines ?? []
        vaccineCellDelegate.vaccines = pet.vaccines ?? []
        self.tableView?.reloadData()
    }
    
    internal func register(tableView: UITableView) {
        let cell = UINib(nibName: "VaccineCell", bundle: nil)
        tableView.register(cell, forCellReuseIdentifier: "VaccineCell")
    }
    
    func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        return vaccines.count
    }
    
    func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        if let cell = tableView.dequeueReusableCell(withIdentifier: "VaccineCell") as? VaccineCell {
            let vaccine = vaccines[indexPath.row]
            cell.name.text = vaccine.name
            cell.date.text = vaccine.date
            return cell
        }
        return UITableViewCell()
    }
    
    func tableView(_ tableView: UITableView, commit editingStyle: UITableViewCell.EditingStyle, forRowAt indexPath: IndexPath) {
        
        if editingStyle == .delete {
            guard let vaccineID = self.vaccines[indexPath.row]._id else {
                fatalError("Cadê o o id da vacina?")
            }
            DispatchQueue.main.async {
                guard let viewController = self.viewController else {
                    fatalError("Cadê a View Controller?")
                }
                viewController.showSpinner(onView: viewController.view)
            }
            VaccineHandler.delete(id: vaccineID) { (response) in
                DispatchQueue.main.async {
                    guard let viewController = self.viewController else {
                        fatalError("Cadê a View Controller?")
                    }
                    viewController.removeSpinner()
                    
                    switch response {
                    case .success(let answer):
                        answer.remove(petID: self.pet._id)
                        EventManager.shared.trigger(eventName: "reloadDeletePet")
                        self.vaccines.removeAll { (vaccine) -> Bool in
                            return vaccine._id == vaccineID
                        }
                        self.tableView?.deleteRows(at: [indexPath], with: .fade)
                    case .error(let description):
                        self.viewController?.showAlert(title: "Error", message: description)
                    }
                }
                
            }
        }
    }
    
    
    
    func tableView(_ tableView: UITableView,
                   leadingSwipeActionsConfigurationForRowAt indexPath: IndexPath) -> UISwipeActionsConfiguration?
    {
        let editAction = UIContextualAction(style: .normal, title:  "Edit", handler: { (ac:UIContextualAction, view:UIView, success:(Bool) -> Void) in
            success(true)
        })
        editAction.backgroundColor = .blue
        
        return UISwipeActionsConfiguration(actions: [editAction])
    }}
