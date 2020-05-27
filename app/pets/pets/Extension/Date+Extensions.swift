//
//  Date.swift
//  pets
//
//  Created by Matheus Silva on 28/03/20.
//  Copyright © 2020 Matheus Gois. All rights reserved.
//

import Foundation

extension Date {
    init (withString string: String) {
        self.init()
        let dateFormatter = DateFormatter()
        dateFormatter.dateFormat = "yyyy-MM-dd HH:mm:ss Z"
        dateFormatter.timeZone = TimeZone(identifier: "BRT")
        self = dateFormatter.date(from: string) ?? Date()
    }
    func getTime() -> String {
        let formatter = DateFormatter()
        formatter.dateFormat = "dd/MM/yyyy"
        formatter.timeZone = TimeZone(abbreviation: "BRT")
        let hourString = formatter.string(from: self)
        return hourString
    }
}
