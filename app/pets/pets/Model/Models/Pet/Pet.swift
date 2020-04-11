//
    //  Pet.swift
    //  pets
    //
    //  Created by Matheus Silva on 01/03/20.
    //  Copyright © 2020 Matheus Gois. All rights reserved.
    //

    import Foundation

    struct Pet: Codable {
        let _id: String
        var name: String
        var age: String
        var gender: String
        var agressive: Bool
        var image: String?
        var breed: String
        var vaccines: Vaccines?

        var dictionaryRepresentation: [String: Any] {
            return [
                "name": name,
                "age": age,
                "gender": gender,
                "agressive": agressive,
                "image": image ?? "",
                "breed": breed,
                "personID": CommonData.shared.user.person?._id ?? ""
            ]
        }

        func addVaccine(vaccine: Vaccine) {
            let index = CommonData.shared.user.person?.pets?.firstIndex(where: { (pet) -> Bool in
                return _id == pet._id
            })
            if var pets = CommonData.shared.user.person?.pets, let index = index {
                pets[index].vaccines?.append(vaccine)
                CommonData.shared.user.person?.pets = pets
            }
        }

        func updateVaccine(vaccine: Vaccine) {
            let index = CommonData.shared.user.person?.pets?.firstIndex(where: { (pet) -> Bool in
                return _id == pet._id
            })
            if var pets = CommonData.shared.user.person?.pets, let index = index {
                let vaccine_index = pets[index].vaccines?.firstIndex(where: { (vaccineV) -> Bool in
                    return vaccine._id == vaccineV._id
                })
                if var vaccines = pets[index].vaccines, let vaccine_index = vaccine_index {
                    vaccines[vaccine_index] = vaccine
                    pets[index].vaccines = vaccines
                    CommonData.shared.user.person?.pets = pets
                }
            }
        }
    }

    typealias Pets = [Pet]
