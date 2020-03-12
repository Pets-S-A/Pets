//
//  String.swift
//  pets
//
//  Created by Matheus Silva on 11/03/20.
//  Copyright © 2020 Matheus Gois. All rights reserved.
//

import Foundation

extension String {
    func getFirst() -> String {
        return components(separatedBy: .whitespaces)[0]
    }
}
