//
//  PetCreateViewController.swift
//  pets
//
//  Created by Matheus Silva on 01/03/20.
//  Copyright © 2020 Matheus Gois. All rights reserved.
//

import UIKit


class PetCreateViewController: UIViewController {
    @IBOutlet weak var petImage: UIImageView!
    @IBOutlet weak var petName: UITextField!
    @IBOutlet weak var petBreed: UITextField!
    @IBOutlet weak var petAge: UIPickerView!
    @IBOutlet weak var petGender: UIPickerView!
    @IBOutlet weak var petAgressive: UISwitch!
    
    var genderDataSource = GenderDataSource()
    var genderDelegate = GenderDelegate()
    
    var ageDataSource = AgeDataSource()
    var ageDelegate = AgeDelegate()
    
    lazy var genderSelected = genderDataSource.options[0]
    lazy var ageSelected  = ageDataSource.options[0]
    
    var agressive = false
    
    var imageName = ""
    
    override func viewDidLoad() {
        super.viewDidLoad()
        config()
    }
    
    func config() {
        configGender()
        configAge()
    }
    
    func configGender() {
        petGender.delegate = genderDelegate
        petGender.dataSource = genderDataSource
    }
    
    func configAge() {
        petAge.delegate = ageDelegate
        petAge.dataSource = ageDataSource
    }
    
    // MARK: - Actions
    @IBAction func create() {
        PetHandler.create(pet: formatPet()) { (response) in
            switch response {
            case .error(let description):
                print(description)
            case .success(let pet):
                print(pet)
            }
        }
    }
    @IBAction func changeStatusAgressive(_ sender: UISwitch) {
        agressive = sender.isOn
    }
    
    
    // MARK: - Ultils
    func formatPet() -> Pet {
        let pet = Pet(id: UUID().uuidString,
                      name: petName.text ?? "",
                      age: ageSelected,
                      gender: genderSelected,
                      agressive: agressive,
                      image: imageName,
                      breed: petBreed.text ?? "")
        
        return pet
    }
    
}
