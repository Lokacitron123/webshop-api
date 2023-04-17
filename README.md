# Webshop API

## Installation

Kör `npm install` för att installera alla dependencies följt av `npm test` för att komma igång.
Om du vill filtrera filka testfiler som körs, exempelvis enbart vg kraven kan du göra det såhär: `npm test -- .vg.` eller för en specifik resurs (order): `npm test -- orders`.
För att bara köra tester för t.ex produkter och g krav kan du skriva `npm test -- products.g.`.
Det går också bra att start dev servern `npm run dev` och testa manuellt via ex: RestClient, Postman eller Curl.

Om det har kommit ut en uppdatering på testerna i uppgiften behöver du köra `npm run update` för att hämta hem det senaste och comitta _package-lock.json_ filen. Därefter hämtar de andra medlemmarna i gruppen ner ändringarna och köra samma skript dom också. Er lärare talar om om ni behöver göra en uppdatering.

## Uppgiftsbeskrivning

I den här uppgiften ska du bygga ett API för en enklare webshop. Projektet ska byggas med Express & Mongoose. Datan som inkommer till API'et kommer att behöva valideras så det säkerställs att rätt data har skickats från klienten.

Validering görs antingen med Joi eller Mongoose (eller båda)

Kryptering görs med npm paketet bcrypt

## Resurser

Dessa resurser måste finnas och ha minst de egenskaper som listas här.

Namn:
`product`
Egenskaper:
`title`
`description`
`price`
`image`
`inStock`
`categories`

Namn:
`order`
Egenskaper:
`customer`
`orderItems`
`deliveryAdress`

Namn:
`user`
Egenskaper:
`username` (email)
`password`
`isAdmin`

Namn:
`category`
Egenskaper:
`title`
`description`

## URLs

_product_
Bas:
`/api/products`
För att hämta produkt baserat på kategori:
`/api/products/byCategory/:id`

_order_
Bas:
`/api/orders`

_user_
Register:
`/api/users/register`
Login:
`/api/users/login`
Logout:
`/api/users/logout`

_category_
Bas:
`/api/categories`

## Kravlista

Den här listan är en sammafattning av de faktiska kraven som du ser genom att köra `npm test`.

**G-krav**

- [] En användare ska kunna hämta alla produkter
- [] En användare ska kunna hämta produkter ifrån en specifik kategori
- [] En användare ska kunna hämta alla, samt hämta en specifik kategori
- [] En användare ska kunna skapa ett konto
- [] Lösenord ska krypteras innan de sparas i databasen
- [] Lösenord får inte skickas tillbaka till klienten vid register och login.
- [] En användare ska kunna kunna logga in och logga ut
- [] En användare ska kunna skapa en order som innehåller produkter & leveransadress
- [] En användare som gör en beställning måste vara inloggad - TODO: gäst checkout då?
- [] Lagersaldot ska minska när en användare skapar en order

**VG-krav:**

- [] En administratör ska kunna administrera produkter (CUD)
- [] En administratör ska kunna hämta all orderhistorik
- [] En användare ska kunna hämta sin egna orderhistorik
- [] En administratör ska kunna markera en order som skickad (orders/markAsShipped/:id)
- [] Priset på befintliga ordrar ska inte påverkas när produkter uppdateras eller tas bort.
