/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button} from 'react-native';
import {SketchCanvas} from "@terrylinla/react-native-sketch-canvas";
import {PanelComponent} from "./PanelComponent/PanelComponent";

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
    android:
        'Double tap R on your keyboard to reload,\n' +
        'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
    render() {
        return (
            <View style={[styles.container, {justifyContent: 'center'}]}>

                <PanelComponent>

                    <Text style={{fontSize: 12, marginTop: 10, marginLeft: 10}}>Name</Text>
                    <Text style={{fontSize: 16}}>Anita Forst</Text>

                    <Text style={{fontSize: 12, marginTop: 10, marginLeft: 10}}>Name</Text>
                    <Text style={{fontSize: 16}}>Anita Forst</Text>

                    <View style={{flexDirection: 'row', marginTop: 10, marginHorizontal: 16, borderWidth: 0.5, borderColor: '#000'}}>
                        <SketchCanvas
                            ref={ref => this.canvas2 = ref}
                            style={{height: 300, width: '100%', backgroundColor: 'white'}}
                            strokeColor={'black'}
                            strokeWidth={2}
                        />
                        <View style={{position: 'absolute', right: 0}}>
                            <Button title={'Clear'} onPress={() => {
                                this.canvas2.clear();
                            }}/>
                        </View>
                    </View>

                    <Button title={'Save'} onPress={() => {
                        console.log(this.canvas2.getPaths());
                        //Alert.alert(JSON.stringify(this.canvas2.getPaths()));
                        this.canvas2.getBase64('jpg', false, true, true, true, (err, result) => {
                            console.log(result)
                        })
                    }}/>

                </PanelComponent>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
