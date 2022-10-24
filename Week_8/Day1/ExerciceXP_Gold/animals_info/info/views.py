from django.shortcuts import render

from django.http import HttpResponse

# Create your views here.

dictio = {
    "animals": [
        {
            "id": 1,
            "name": "Dog",
            "legs": 4,
            "weight": 5.67,
            "height": 4.2,
            "speed": 34,
            "family": 2,
            "image": "chien.jpg"
        },

        {
            "id": 2,
            "name": "Domestic Cat",
            "legs": 2,
            "weight": 5.67,
            "height": 4.2,
            "speed": 34,
            "family": 1,
            "image": "chat.jpg"
        },
        {
            "id": 3,
            "name": "Panther",
            "legs": 2,
            "weight": 5.67,
            "height": 4.2,
            "speed": 34,
            "family": 1,
            "image": "pant.jpg"
        },
        {
            "id": 4,
            "name": "abeille",
            "legs": 4,
            "weight": 5.67,
            "height": 4.2,
            "speed": 34,
            "family": 3,
            "image": "ab.jpg"
        },
        {
            "id": 5,
            "name": "mouche",
            "legs": 4,
            "weight": 5.67,
            "height": 4.2,
            "speed": 34,
            "family": 3,
            "image": "mouch.jpg"
        },
        {
            "id": 6,
            "name": "boa",
            "legs": 4,
            "weight": 5.67,
            "height": 4.2,
            "speed": 34,
            "family": 4,
            "image": "boa.jpg"
        },

        {
            "id": 7,
            "name": "cobra",
            "legs": 4,
            "weight": 5.67,
            "height": 4.2,
            "speed": 34,
            "family": 4,
            "image": "cob.jpg"
        },
        {
            "id": 8,
            "name": "vache",
            "legs": 4,
            "weight": 5.67,
            "height": 4.2,
            "speed": 34,
            "family": 5,
            "image": "vach.jpg"
        },
        {
            "id": 9,
            "name": "mouton",
            "legs": 4,
            "weight": 5.67,
            "height": 4.2,
            "speed": 34,
            "family": 5,
            "image": "mout.jpg"
        },

        {
            "id": 10,
            "name": "crapeaud",
            "legs": 4,
            "weight": 5.67,
            "height": 4.2,
            "speed": 34,
            "family": 6,
            "image": "crap.jpg"
        },

    ],
    "families": [
        {
            "id": 1,
            "name": "Felidae"
        },
        {
            "id": 2,
            "name": "Caninae"
        },

        {
            "id": 3,
            "name": "insect"
        },
        {
            "id": 4,
            "name": "reptile"
        },
        {
            "id": 5,
            "name": "mammal"
        },
        {
            "id": 6,
            "name": "amphibian"
        }
    ]
}


def animal(request, id):
    context = {
        "dictio": dictio,
        "x": id,
    }
    return render(request, 'animaux.html', context)


def family(request, id):
    context = {
        "dictio": dictio,
        "x": id,
    }
    return render(request, 'family.html', context)


def animaux(request, ):
    l = []
    ind = []
    anim = dictio['animals']
    for i in range(len(anim)):
        l.append(anim[i]['name'])
    for a in range(1, len(l)+1):
        ind.append(a)

    liste = dict(zip(l, ind))

    context = {
        'data': liste

    }
    return render(request, 'anim_liste.html', context)
