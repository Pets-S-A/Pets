//
//  ViewController.swift
//  pets
//
//  Created by Matheus Silva on 01/03/20.
//  Copyright © 2020 Matheus Gois. All rights reserved.
//

import UIKit

class MainViewController: UIViewController {
    @IBOutlet weak var personName: UILabel!
    @IBOutlet weak var personImage: UIImageView!
    
    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view.
        setUp()
    }
    
    func setUp() {
        preLoad()
    }
    
    func preLoad() {
        personName.text = CommonData.shared.user.name
        if let imageUrl = CommonData.shared.user.person?.image {
            DispatchQueue.main.async {
                self.personImage.imageFromWeb(withURL: imageUrl)
            }
        }
        
    }
    
    
    // MARK:- Actions
    @IBAction func toProfile() {
        performSegue(withIdentifier: "toProfile", sender: nil)
    }
    
    override func prepare(for segue: UIStoryboardSegue, sender: Any?) {
        if let view = segue.destination as? RegisterPersonViewController {
            view.isProfileEdition = true
        }
    }
}

