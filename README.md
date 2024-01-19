# gauthiermodalplugin

:Author: Gauthier
:Version: $0.1.62$

## Description


gauthiermodalplugin is a plugin with a modal React component. It allows you to make a modal appear, with a custom message in it

## 🏗️ Installation steps

1. install the plugin with `npm install gauthiermodalplugin`

## 🚀 Utilisation

Utilisation simple :
1. Importer le component du plugin (ex: `import { Modal } from "gauthiermodalplugin";` )
2. Appeler le component React  dans le code en lui fournissant 3 props :
  - `open`: Boolean, si il est égal à `True` la modale apparait, si `False` elle disparait
  - `onClose`: Fonction qui permet de changer la valeur `True` de `open` en `False` afin de permettre de faire disparaitre la modale quand on appuie sur la croix de la modale
  - `message`: String contenant le message à faire apparaitre sur la modale
  Exemple = `<Modal open={True} onClose={toggleModal} message={"Employé créé!"}`
  - utiliser les useStates pour faire passer la valeur `open` en `True` afin de faire apparaitre la modale


## 🚀 Requirements

- Node (version 18.2.0)
- Npm (version 10.2.4)

### 🔧 Used tools

- [React](https://reactjs.org/)
- [React router](https://reactrouter.com/en/)
- [Babeljs](https://babeljs.io/)
- [HTML]
- [CSS]
