import React, {
    Component,
    AppRegistry,
    StyleSheet,
    View,
    Navigator,
    Text,
    DrawerLayoutAndroid,
    ToolbarAndroid,
    ScrollView
} from 'react-native';
import { connect } from 'react-redux';
import configureStore from '../../configureStore';
import {
    TYPO,
    COLOR,
    Button,
    Icon,
    Toolbar,
} from 'react-native-material-design-components';
import { CHANGE_PRIMARY, changePrimary } from '../modules/main';
import TypographyExample from '../../components/TypographyExample';
import ColorExample from '../../components/ColorExample';
import ButtonExample from '../../components/ButtonExample';
import RadioButtonExample from '../../components/RadioButtonExample';
import CheckboxExample from '../../components/CheckboxExample';
import IconExample from '../../components/IconExample';
import ChangeTheme from './ChangeTheme';

console.log(IconExample)

const store = configureStore();
const routes = [
    {
        name: 'main',
        text: 'HOME'
    },
    {
        name: 'Color',
    },
    {
        name: 'Typography',
    },
    {
        name: 'Button',
    },
    {
        name: 'RadioButton',
    },
    {
        name: 'Checkbox',
    },
    {
        name: 'Icon',
    },
    {
        name: 'ChangeTheme',
    }
];
export default class Main extends Component {
    componentDidMount() {
        const { dispatch } = this.props;
        dispatch(changePrimary('paperRed'));
    }

    render = () => {
        let initialRoute = {name: 'main'};
        let { main } = this.props;
        var navigationView = (
            <View style={{flex: 1, backgroundColor: '#fff'}}>
                <View style={ [styles.drawerCover,{backgroundColor: COLOR[`${main.primary}700`].color}]}>
                    <Icon name="google"
                          color='rgba(0,0,0,.30)'
                          size={140}
                          style={styles.google}/>
                    <Text style={[TYPO.paperFontDisplay2, COLOR[`${main.primary}300`]]}>
                        Material React Native
                    </Text>
                </View>

                <ScrollView style={styles.page}>
                    {routes.map(route => (
                        <Button
                            primary={this.props.main.primary}
                            onPress={()=>{
                                this.drawerRef.closeDrawer();
                                this.navigatorRef.push({name:route.name}
                            )}}
                            value={route.text || route.name}/>
                    ))}
                </ScrollView>
            </View>
        );
        return (
            <DrawerLayoutAndroid
                drawerWidth={300}
                drawerPosition={DrawerLayoutAndroid.positions.Left}
                renderNavigationView={() => navigationView}
                ref={(drawer)=> {this.drawerRef = drawer}}
            >

                <Navigator
                    initialRoute={initialRoute}
                    configureScene={() => Navigator.SceneConfigs.FadeAndroid}
                    renderScene={this.RouteMapper}
                />
            </DrawerLayoutAndroid>
        )
    };

    RouteMapper = (route, navigator) => {
        this.navigatorRef = navigator;
        switch (route.name) {
            case 'main':
                return (
                    <View style={styles.page}>
                        <Toolbar
                            navIconName="menu"
                            title="Material React Native"
                            primary={this.props.main.primary}
                            onIconClicked={()=>this.drawerRef.openDrawer()}
                        />
                        <ScrollView style={styles.page}>

                        </ScrollView>
                    </View>
                );
            case 'Color':
                return (
                    <View style={styles.page}>
                        <Toolbar
                            navIconName="menu"
                            title={route.name}
                            primary={this.props.main.primary}
                            onIconClicked={()=>this.drawerRef.openDrawer()}
                        />
                        <ScrollView style={styles.page}>
                            <ColorExample primary={this.props.main.primary}/>
                        </ScrollView>
                    </View>
                );
            case 'Typography':
                return (
                    <View style={styles.page}>
                        <Toolbar
                            navIconName="menu"
                            title={route.name}
                            primary={this.props.main.primary}
                            onIconClicked={()=>this.drawerRef.openDrawer()}
                        />
                        <ScrollView style={styles.page}>
                            <TypographyExample primary={this.props.main.primary}/>
                        </ScrollView>
                    </View>
                );
            case 'Button':
                return (
                    <View style={styles.page}>
                        <Toolbar
                            navIconName="menu"
                            title={route.name}
                            primary={this.props.main.primary}
                            onIconClicked={()=>this.drawerRef.openDrawer()}
                        />
                        <ScrollView style={styles.page}>
                            <ButtonExample primary={this.props.main.primary}/>
                        </ScrollView>
                    </View>
                );
            case 'RadioButton':
                return (
                    <View style={styles.page}>
                        <Toolbar
                            navIconName="menu"
                            title={route.name}
                            primary={this.props.main.primary}
                            onIconClicked={()=>this.drawerRef.openDrawer()}
                        />
                        <ScrollView style={styles.page}>
                            <RadioButtonExample primary={this.props.main.primary}/>
                        </ScrollView>
                    </View>
                );
            case 'Checkbox':
                return (
                    <View style={styles.page}>
                        <Toolbar
                            navIconName="menu"
                            title={route.name}
                            primary={this.props.main.primary}
                            onIconClicked={()=>this.drawerRef.openDrawer()}
                        />
                        <ScrollView style={styles.page}>
                            <CheckboxExample primary={this.props.main.primary}/>
                        </ScrollView>
                    </View>
                );
            case 'Icon':
                return (
                    <View style={styles.page}>
                        <Toolbar
                            navIconName="menu"
                            title={route.name}
                            primary={this.props.main.primary}
                            onIconClicked={()=>this.drawerRef.openDrawer()}
                        />
                        <View style={styles.page}>
                            <IconExample primary={this.props.main.primary}/>
                        </View>
                    </View>
                );
            case 'ChangeTheme':
                return (
                    <View style={styles.page}>
                        <Toolbar
                            navIconName="menu"
                            title={route.name}
                            primary={this.props.main.primary}
                            onIconClicked={()=>this.drawerRef.openDrawer()}
                        />
                        <ScrollView style={styles.page}>
                            <ChangeTheme dispatch={this.props.dispatch} primary={this.props.main.primary}/>
                        </ScrollView>
                    </View>
                );
        }
    }
}

const styles = StyleSheet.create({
    page: {
        flex: 1
    },
    content: {
        padding: 16
    },
    drawerCover: {
        height: 168,
        padding: 16,
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,.2)'
    },
    google: {
        position: 'absolute',
        bottom: 16,
    }
});


function mapStateToProps(state) {
    return {main} = state;
}

export default connect(mapStateToProps)(Main);