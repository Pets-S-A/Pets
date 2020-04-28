//
//  PersonNameComponents.swift
//  pets
//
//  Created by Matheus Silva on 23/03/20.
//  Copyright © 2020 Matheus Gois. All rights reserved.
//

import Foundation
import AuthenticationServices

extension PersonNameComponents {
    func getFullName() -> String {
        let given = givenName ?? ""
        let family = familyName ?? ""
        return given + " " + family
    }
}
