import React, { useState } from 'react'
import { View, Text, Button, StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import { TestModules, TestPages, ITestPage } from './TestPages'
import { hook, useCavy } from 'cavy'
import { Exception } from 'handlebars';

interface ITestAppState {
    testPage?: string;
};

const styles = StyleSheet.create({
    headerContainer: {
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: '#96969A',
    },
    header: {
        height: 40,
        flexDirection: 'row'
    },
    headerLeft: {},
    headerCenter: {
        flex: 1,
        position: 'absolute',
        top: 7,
        left: 0,
        right: 0
    },
    title: {
        fontSize: 19,
        fontWeight: '600',
        textAlign: 'center'
    },
    testPageContainer: {
        flex: 1
    }
});

interface HeaderProps {
    onBack?: any,
    title: string
}

function Header(props: HeaderProps) {
    const generateTestHook = useCavy();

    let backButton = (<View />);
    if (props.onBack) {
        backButton = (<View style={styles.headerLeft}>
            <Button title="Back" onPress={props.onBack} ref={generateTestHook('CavyTest.Back')} />
        </View>)
    }

    return (
        <View style={styles.headerContainer}>
            <View style={styles.header}>
                <View style={styles.headerCenter}>
                    <Text style={styles.title}>{props.title}</Text>
                </View>
                {backButton}
            </View>
        </View>);

};

interface TestPageListProps {
    onNavigate: Function,
    list: Array<ITestPage>,
}

class TestPageList extends React.Component<TestPageListProps> {
    _onPress(item: ITestPage): void {
        this.props.onNavigate(item.key);
    }

    _renderItem = ({ item }) => (
        <TouchableOpacity onPress={() => { this._onPress(item) }} ref={this.props.generateTestHook(item.key)}>
            <View>
                <Text>{item.title || item.key}</Text>
            </View>
        </TouchableOpacity>
    );

    public render(): JSX.Element {
        return <FlatList<ITestPage> data={this.props.list} renderItem={this._renderItem} />
    }
}

const TestableTestPageList = hook<any>(TestPageList)

export interface SimpleTestAppProps{
    testPages: ITestPage[]
}

function SimpleTestApp(props: SimpleTestAppProps){
    const [testPageKey, setTestPageKey] = useState(null);

    
}

class TestApp extends React.Component<{}, ITestAppState> {
    private _handleBack = () => {
        this._navigateTo(null);
    };

    private _navigateTo = (page?: string) => {
        this.setState({ testPage: page });
    };

    public render(): JSX.Element {
        if (this.state && this.state.testPage) {
            const testPage = TestModules[this.state.testPage];
            const title = testPage.title || testPage.key;
            let Testpage: any;
            if (typeof (testPage.page) === 'object' && testPage.page.default)
                Testpage = testPage.page.default;
            else
                Testpage = testPage.page;

            return (
                <View style={styles.testPageContainer}>
                    <Header onBack={this._handleBack} title={title} />
                    <Testpage />
                </View>
            );
        }
        return (
            <View style={styles.testPageContainer}>
                <Header title="CavyTestApp" />
                <TestableTestPageList onNavigate={this._navigateTo} list={TestPages} />
            </View>
        );
    }
}

export default TestApp;