import React from 'react';
import { Button, StyleSheet, TextInput, Text, View, Image, Picker, Alert, ScrollView } from 'react-native';
import firebase from 'firebase';
import CustomHeader from '../../components/CustomHeader';
import CustomFooter from '../../components/CustomFooter';
import headerStyles from '../../styles/HeaderStyles';

/*import RNFetchBlob from 'react-native-fetch-blob'

const Blob = RNFetchBlob.polyfill.Blob;
const fs = RNFetchBlob.fs;
window.XMLHttpRequest = RNFetchBlob.polyfill.XMLHttpRequest;
window.Blob = Blob;*/

export default class NewArticle extends React.Component {
    static navigatorOptions = {
        title: 'NewArticle',
    };

    constructor(props){
        super(props);
        this.state={
            isAgeSelected:false,
            error : false,
            isPushed : false,
            img:'',
            name:'',
            desc:'',
            age:'',
            sexe:'',
            taille:'',
            type:'',
            nomVendeur:'VendeurTest',
            prix:0
        }
    }

    writeUserData(img, name, desc, age, sexe, taille, type, nomVendeur, prix) {
        let isFilled = this.isAllFilled();
        if(!isFilled) {
            firebase.database().ref('articles/').push({
                img, 
                name, 
                desc, 
                age, 
                sexe, 
                taille, 
                type, 
                nomVendeur, 
                prix
            }).then((data) => {
                //success callback
                console.log('data ', data)
            }).catch((error) => {
                //error callback
                console.log('error ', error)
            });
            this.setState({error : false, isPushed : true});
        } else {
            this.setState({error : true})
        }
    }

    isAllFilled(){
        if(
            //this.state.img === '' ||
            this.state.name === '' ||
            this.state.desc === '' ||
            this.state.age === '' ||
            this.state.sexe === '' ||
            this.state.taille === '' ||
            this.state.type === '' ||
            this.state.nomVendeur === '' ||
            this.state.prix === '' ||
            this.state.prix <= 0){
            return true;
        }
    }

    selectAge = (newAge) =>{
        this.setState({age: newAge}, () => {
            if(this.state.age != ''){
                this.setState({isAgeSelected:true});
            }
            else {
                this.setState({isAgeSelected:false});
            }
        }); 
    }

    choosePicker = (ageState) => {
        if(ageState != ''){
            if(ageState === 'Adulte'){
                return(
                    <Picker
                        selectedValue={this.state.taille}
                        style={{height: 50, width: 180}}
                        onValueChange={(itemValue, itemIndex) =>
                            this.setState({taille: itemValue})
                        }>
                        <Picker.Item label="" value="" />
                        <Picker.Item label="XS" value="XS" />
                        <Picker.Item label="S" value="S" />
                        <Picker.Item label="M" value="M" />
                        <Picker.Item label="L" value="L" />
                        <Picker.Item label="XL" value="XL" />
                        <Picker.Item label="XXL" value="XXL" />
                    </Picker>
                );
            }
            else if(ageState === 'Enfant'){
                return(
                    <Picker
                        selectedValue={this.state.taille}
                        style={{height: 50, width: 180}}
                        onValueChange={(itemValue, itemIndex) =>
                            this.setState({taille: itemValue})
                        }>
                        <Picker.Item label="" value="" />
                        <Picker.Item label="4-6" value="4-6" />
                        <Picker.Item label="6-8" value="6-8" />
                        <Picker.Item label="8-10" value="8-10" />
                        <Picker.Item label="10-12" value="10-12" />
                        <Picker.Item label="12-14" value="12-14" />
                        <Picker.Item label="14-16" value="14-16" />
                    </Picker>
                );
            }
        }
    }

    updateKeysWithInputHandler = (val) => {
        prixInt = parseInt(val);
        console.log(val);
        this.setState({
            prix: prixInt
        })
    }    

    render () {


        return (
            <View style={headerStyles.container}>

                <CustomHeader title={'Nouvelle Article'} navigation={this.props.navigation}/>
                <View style={styles.container}>
                    <ScrollView>
                        <Text style={styles.title}>Vendez votre vêtement : {"\n"}</Text>

                        <Text style={styles.text}>{"\n"}Donnez un nom à votre article (20 caractère max.){"\n"}</Text>
                        <TextInput
                            placeholder="Nom de l'article"
                            style={styles.input}
                            maxLength = {20}
                            onChangeText={name => this.setState({name})}
                        />

                        <Text style={styles.text}>{"\n"}Choisissez l'âge du destinataire du vêtement : {"\n"}</Text>
                        <Picker
                            selectedValue={this.state.age}
                            style={{height: 50, width: 180}}
                            onValueChange={(itemValue, itemIndex) =>
                                this.selectAge(itemValue)
                            }>
                            <Picker.Item label="" value="" />
                            <Picker.Item label="Adulte" value="Adulte" />
                            <Picker.Item label="Enfant" value="Enfant" />
                        </Picker>

                        {this.state.isAgeSelected && 
                            <Text style={styles.text}>{"\n"}Choisissez la taille du vêtement : {"\n"}</Text>
                        }
                        {this.state.isAgeSelected && 
                            this.choosePicker(this.state.age)
                        }
                        <Text style={styles.text}>{"\n"}Choisissez le sexe du destinataire du vêtement : {"\n"}</Text>
                        <Picker
                            selectedValue={this.state.sexe}
                            style={{height: 50, width: 180}}
                            onValueChange={(itemValue, itemIndex) =>
                                this.setState({sexe: itemValue})
                            }>
                            <Picker.Item label="" value="" />
                            <Picker.Item label="Homme" value="Homme" />
                            <Picker.Item label="Femme" value="Femme" />
                        </Picker>

                        <Text style={styles.text}>{"\n"}Choisissez le type de votre vêtement : {"\n"}</Text>
                        <Picker
                            selectedValue={this.state.type}
                            style={{height: 50, width: 180}}
                            onValueChange={(itemValue, itemIndex) =>
                                this.setState({type: itemValue})
                            }>
                            <Picker.Item label="" value="" />    
                            <Picker.Item label="Pantalon" value="Pantalon" />
                            <Picker.Item label="Chaussures" value="Chaussures" />
                            <Picker.Item label="T-shirt" value="T-shirt" />
                            <Picker.Item label="Veste" value="Veste" />
                            <Picker.Item label="Accessoires" value="Accessoires" />
                            <Picker.Item label="Robe" value="Robe" />
                            <Picker.Item label="Jupe" value="Jupe" />
                            <Picker.Item label="Manteau" value="Manteau" />
                            <Picker.Item label="Autre..." value="Autre..." />
                        </Picker>

                        <Text style={styles.text}>{"\n"}Décrivez votre vêtement (état, matériaux, points importants...) (200 caractère max.){"\n"}</Text>
                        <TextInput
                            placeholder="Description"
                            style={styles.input}
                            maxLength = {200}
                            onChangeText={desc => this.setState({desc})}
                            multiline={true}
                        />

                        <Text style={styles.text}>{"\n"}Entrez le prix auquel vous voulez vendre votre article{"\n"}</Text>
                        <TextInput
                            placeholder="Prix souhaité"
                            keyboardType="numeric"
                            style={styles.input}
                            maxLength = {6}
                            onChange={(event) => this.updateKeysWithInputHandler(event.nativeEvent.text)}
                        />
                    </ScrollView>
                    
                    {this.state.error && <Text style={styles.error}>Erreur, tous les champs ne sont pas remplis.</Text>}
                    {this.state.isPushed && <Text>Vos données ont été prises en compte.</Text>}
                    <Text>{'\n'}</Text>
                    <Button title={"Ajouter Article"} onPress={() =>
                        (this.writeUserData(
                            this.state.img,
                            this.state.name,
                            this.state.desc,
                            this.state.age,
                            this.state.sexe,
                            this.state.taille,
                            this.state.type,
                            this.state.nomVendeur ,
                            this.state.prix)
                        )}
                    />

                </View>
                <CustomFooter navigation={this.props.navigation}/>
            </View>

        )
    }

}

const styles = StyleSheet.create({
    title : {
        fontSize:20
    },
    container: {
        flex: 1,
        backgroundColor: '#FFD281',
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttons: {
        marginBottom: 10 ,
        margin:75,
        padding:5
    },
    tab: {
        padding: 20,
        height: 100,
    },
    input: {
        backgroundColor : 'white',
        height: 40,
        width: 300,
        marginLeft : 10
    },
    error :{
        color : 'red',
        backgroundColor: 'white'
    },
});