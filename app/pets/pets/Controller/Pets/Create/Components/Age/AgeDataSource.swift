//
//  AgeDataSource.swift
//  pets
//
//  Created by Matheus Silva on 01/03/20.
//  Copyright © 2020 Matheus Gois. All rights reserved.
//

import UIKit

class AgeDataSource: NSObject, UIPickerViewDataSource {
    var options  = ["1 anos", "2 anos", "3 anos", "4 anos"]
    weak var viewController: PetCreateViewController?
    
    init(pickerPerson: UIPickerView, viewController: PetCreateViewController) {
        super.init()
        pickerPerson.dataSource = self
        self.viewController = viewController
    }
    func numberOfComponents(in pickerView: UIPickerView) -> Int {
        return 1
    }
    func pickerView(_ pickerView: UIPickerView, numberOfRowsInComponent component: Int) -> Int {
        return options.count
    }
}
