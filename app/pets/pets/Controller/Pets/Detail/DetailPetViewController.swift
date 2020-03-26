//
//  DetailPetViewController.swift
//  pets
//
//  Created by Matheus Silva on 25/03/20.
//  Copyright © 2020 Matheus Gois. All rights reserved.
//

import UIKit

class DetailPetViewController: UIViewController {
    var pet: Pet!
    
    override func viewDidLoad() {
        super.viewDidLoad()
        print(pet)
    }
    
    override func prepare(for segue: UIStoryboardSegue, sender: Any?) {
        if let view = segue.destination as? CreateVaccineViewController {
            view.pet = pet
        }
    }
}
