//
//  ViewController.swift
//  pets
//
//  Created by Matheus Silva on 01/03/20.
//  Copyright © 2020 Matheus Gois. All rights reserved.
//

import UIKit

protocol MainProtocol {
    func reloadData()
}

class MainViewController: UIViewController {
    @IBOutlet weak var personName: UILabel!
    @IBOutlet weak var personImage: UIImageView!
    @IBOutlet weak var collectionView: UICollectionView!
    var petsDelegate = PetsDelegate()
    var petsDataSource = PetsDataSource()

    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view.

        setUp()
        preLoad()
    }

    func setUp() {
        setUpCollection()
        registerEvents()
    }

    func preLoad() {
        personName.text = CommonData.shared.user.person?.name
        if let imageUrl = CommonData.shared.user.person?.image {
            self.personImage.imageFromWeb(withURL: imageUrl)
        }
    }

    // MARK: - Collection
    @IBAction
    func setUpCollection() {
        petsDataSource.setup(collectionView: collectionView,
                             viewController: self)
        petsDelegate.setup(collectionView: collectionView,
                           viewController: self)
        fetchDataCollection()
    }

    func fetchDataCollection() {
        petsDataSource.fetch(delegate: petsDelegate)
    }

    func registerEvents() {
        EventManager.shared.listenTo(eventName: "reloadCommonData") {
            DispatchQueue.main.async {
                self.petsDataSource.reloadWithCommonData(delegate: self.petsDelegate)
            }
        }
        EventManager.shared.listenTo(eventName: "reloadDeletePet") {
            DispatchQueue.main.async {
                self.petsDataSource.reloadWithCommonData(delegate: self.petsDelegate)
            }
        }
        EventManager.shared.listenTo(eventName: "reloadImage") { (answer) in
            DispatchQueue.main.async {
                if let image = answer as? UIImage {
                    self.personImage.image = image
                } else if let text = answer as? String {
                    self.personName.text = text
                }
            }
        }
    }

    // MARK: - Actions
    @IBAction func toProfile() {
        performSegue(withIdentifier: "toProfile", sender: nil)
    }

    override func prepare(for segue: UIStoryboardSegue, sender: Any?) {
        if let view = segue.destination as? RegisterPersonViewController {
            view.isProfileEdition = true
            view.imageProfile = personImage.image
        } else if let view = segue.destination as? PetCreateViewController {
            view.mainDelegate = self
        } else if let view = segue.destination as? DetailPetViewController {
            guard let answer = sender as? (Pet, UIImage?) else {
                fatalError("Error to take pet in sender")
            }
            view.pet = answer.0
            view.petImage = answer.1
        }
    }
}

extension MainViewController: MainProtocol {
    func reloadData() {
        fetchDataCollection()
    }
}
