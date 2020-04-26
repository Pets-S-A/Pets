//
//  Server.swift
//  pets
//
//  Created by Matheus Silva on 10/03/20.
//  Copyright © 2020 Matheus Gois. All rights reserved.
//

import Foundation

struct Environment {
    // MARK: - State
    private static let PRODUCTION = true

    // MARK: - Server
    public static var SERVER_URL: String {
        return PRODUCTION ?
            "https://br-vacci-pet.herokuapp.com/api" : "http://localhost:3000/api"
    }

    public static var TOKEN: [String: String] {
        return ["master-token": "token"]
    }

    // MARK: - IMAGE
    public static let IMAGE_URL_SERVER = "https://br-upload-image-pets.herokuapp.com/"

    public static let IMAGE_ACCESS_CODE = "qrH9hy1SFind9iGLhEkykCH7Rp7jpRDq"
}
