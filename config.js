const STORE_CONFIG = {
  "PRODUCTS": {
    "1": {
      "name": "مودال 1",
      "price": 5200,
      "image": "https://raw.githubusercontent.com/Dz-Store/WER/main/images/product-1-1762896503064-modal5.jpg",
      "description": "مودال تركي بمواصفات عالمية",
      "availableSizes": [
        "S",
        "M"
      ],
      "availableColors": [
        "أزرق",
        "أسود"
      ],
      "ageRanges": [],
      "colorImages": {}
    },
    "2": {
      "name": "مودال 2",
      "price": 6000,
      "image": "https://raw.githubusercontent.com/Dz-Store/WER/main/images/product-2-1762900938660-modal4.jpg",
      "description": "مودال يومي جميل جدا",
      "availableSizes": [
        "S",
        "M"
      ],
      "availableColors": [
        "أزرق",
        "أحمر"
      ],
      "ageRanges": [],
      "colorImages": {
        "أزرق": {
          "images": [
            "https://raw.githubusercontent.com/Dz-Store/WER/main/images/product-2-أزرق-1762901095657-modal4.jpg"
          ],
          "ageRanges": [
            {
              "ageFrom": 2,
              "ageTo": 5,
              "size": "S"
            }
          ]
        },
        "أحمر": {
          "images": [
            "https://raw.githubusercontent.com/Dz-Store/WER/main/images/product-2-أحمر-1762901190503-modal3.jpg"
          ],
          "ageRanges": [
            {
              "ageFrom": 6,
              "ageTo": 8,
              "size": "M"
            }
          ]
        }
      }
    }
  },
  "DELIVERY_PRICES": {
    "43 - ميلة": {
      "home": 900,
      "desk": 450
    }
  },
  "DISCOUNTS": {
    "enableQuantityDiscount": false,
    "minQuantityForDiscount": 2,
    "discountPerItem": 300,
    "discountScope": "all",
    "discountProducts": [
      1,
      2
    ],
    "enablePromotionalDiscount": false,
    "promotionalDiscountPercent": 20,
    "promotionalDiscountedPrice": 0,
    "promoDiscountScope": "all",
    "promoDiscountProducts": []
  },
  "STORE_INFO": {
    "name": "Rahouba-shopp",
    "storeIcon": "👑",
    "storeTitle": "👑 أحدث موديلات الأطفال",
    "tagline": "متجر أفخم الملابس",
    "phoneNumbers": [
      "0671466489",
      "0551102155"
    ],
    "logo": "",
    "facebookUrl": "",
    "instagramUrl": "",
    "messengerUrl": "",
    "viberNumber": ""
  },
  "AVAILABLE_COLORS": [
    "أبيض",
    "أسود",
    "أحمر",
    "أزرق"
  ],
  "AVAILABLE_SIZES": [
    "S",
    "M",
    "L",
    "XL",
    "XXL"
  ],
  "GOOGLE_SHEETS": {
    "enabled": true,
    "scriptUrl": "https://script.google.com/macros/s/AKfycbzw7NSduBIcVc2ugUKF5EtpmAej7bo7bDFKj0K-aHeXaYmqWmoUYtvOPGX6TjRKKN78/exec",
    "ordersSheetId": "1U3ak4PZfAZR7oPUquLUETsv-ZhzrXR9v5XYSdTUeOxw",
    "productsSheetId": "1U3ak4PZfAZR7oPUquLUETsv-ZhzrXR9v5XYSdTUeOxw"
  },
  "ADMIN_SETTINGS": {
    "password": "1234",
    "autoSync": true,
    "backupEnabled": true,
    "notifications": true,
    "lastUpdated": "2024-11-12T10:00:00.000Z"
  },
  "COLOR_IMAGES_MANAGEMENT": {
    "enabled": true,
    "maxImagesPerColor": 10,
    "allowedFormats": [
      "jpg",
      "jpeg",
      "png",
      "webp"
    ]
  },
  "AGE_RANGES_MANAGEMENT": {
    "enabled": true,
    "minAge": 2,
    "maxAge": 15
  },
  "GITHUB_INTEGRATION": {
    "enabled": true,
    "defaultRepo": "Dz-Store/WER",
    "defaultBranch": "main",
    "defaultFolder": "images"
  },
  "SYSTEM_SETTINGS": {
    "autoBackup": true,
    "backupInterval": 24,
    "maxBackups": 30,
    "enableNotifications": true,
    "enableAnalytics": true
  }
};