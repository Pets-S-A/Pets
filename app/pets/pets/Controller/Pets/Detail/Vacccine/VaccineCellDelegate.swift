//
//  VaccineCellDelegate.swift
//  vaccines
//
//  Created by Matheus Silva on 26/03/20.
//  Copyright © 2020 Matheus Gois. All rights reserved.
//

import UIKit


class VaccineCellDelegate: NSObject, UITableViewDelegate {
    
    var vaccines = Vaccines()
    weak var viewController: UIViewController?
    weak var tableView: UITableView?
    
    init(tableView: UITableView, viewController: UIViewController) {
        super.init()
        tableView.delegate = self
        self.tableView = tableView
        self.viewController = viewController
    }
    
    func tableView(_ tableView: UITableView, didSelectRowAt indexPath: IndexPath) {
        toEdition(row: indexPath.row)
    }
    
    @objc
    func toEdition(row: Int) {
        self.viewController?.performSegue(withIdentifier: "toVaccine",
                                          sender: vaccines[row])
    }
}
