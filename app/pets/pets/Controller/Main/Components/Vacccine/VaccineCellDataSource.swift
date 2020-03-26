//
//  VaccineCellDataSource.swift
//  vaccines
//
//  Created by Matheus Silva on 26/03/20.
//  Copyright © 2020 Matheus Gois. All rights reserved.
//

import UIKit


class VaccineCellDataSource: NSObject, UITableViewDataSource {
    
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
}
