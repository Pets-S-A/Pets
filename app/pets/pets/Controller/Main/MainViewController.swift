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
    }

    func setUp() {
        preLoad()
        setUpCollection()
        registerEvents()
    }

    func preLoad() {
        personName.text = CommonData.shared.user.person?.name
        if let imageUrl = CommonData.shared.user.person?.image {
            DispatchQueue.main.async {
                self.personImage.imageFromWeb(withURL: imageUrl)
            }
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
    }

    // MARK: - Actions
    @IBAction func toProfile() {
        performSegue(withIdentifier: "toProfile", sender: nil)
    }

    override func prepare(for segue: UIStoryboardSegue, sender: Any?) {
        if let view = segue.destination as? RegisterPersonViewController {
            view.isProfileEdition = true
        } else if let view = segue.destination as? PetCreateViewController {
            view.mainDelegate = self
        } else if let view = segue.destination as? DetailPetViewController {
            guard let pet = sender as? Pet else {
                fatalError("Error to take pet in sender")
            }
            view.pet = pet
        }
    }
}

extension MainViewController: MainProtocol {
    func reloadData() {
        fetchDataCollection()
    }
}
