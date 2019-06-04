import React from 'react'
import {View, Text, Button, StyleSheet, FlatList,TouchableOpacity} from 'react-native'
import {TestModules, TestPages, ITestPage} from './TestPages'
import {hook, useCavy} from 'cavy'

interface ITestAppState {
    testPage?: string;
};

const styles = StyleSheet.create({
    headerContainer: {
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: '#96969A',
        backgroundColor: '#F5F5F6'
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
    exampleContainer: {
        flex: 1
    }
});

interface HeaderListProps {
    onBack?: any,
    title: string
    generateTestHook?: Function
}

class Header extends React.Component<HeaderListProps>
{
    render(): any {
        if (this.props.onBack)
        {
            return (
                <View style={styles.headerContainer}>
                    <View style={styles.header}>
                    <View style={styles.headerCenter}>
                        <Text style={styles.title}>{this.props.title}</Text>
                    </View>
                        <View style={styles.headerLeft}>
                        <Button title="Back" onPress={this.props.onBack} ref={ this.props.generateTestHook('CavyTest.Back') }/>
                        </View>
                    </View>
                </View>);
        }
        else
        {
            return (
                <View style={styles.headerContainer}>
                    <View style={styles.header}>
                    <View style={styles.headerCenter}>
                        <Text style={styles.title}>{this.props.title}</Text>
                    </View>
                    </View>
                </View>);
        }
    }
}

const TestableHeader = hook<any>(Header);

// const Header = ({ onBack, title}: { onBack?: () => void; title: string}): any => {
//     const generateTestHook = useCavy();
//     return
//     (
//         <View style={styles.headerContainer}>
//             <View style={styles.header}>
//             <View style={styles.headerCenter}>
//                 <Text style={styles.title}>{title}</Text>
//             </View>
//             {onBack && (
//                 <View style={styles.headerLeft}>
//                 <Button title="Back" onPress={onBack} ref={ generateTestHook('CavyTest.Back') }/>
//                 </View>
//             )}
//             </View>
//         </View>);
// };


interface TestPageListProps {
    onNavigate: Function,
    list: Array<ITestPage>,
    generateTestHook?: Function
}

class TestPageList extends React.Component<TestPageListProps> {
     _onPress(item: ITestPage): void {
        this.props.onNavigate(item.key);
     }

     _renderItem = ({item}) => (
        <TouchableOpacity onPress={ () => {this._onPress(item)} } ref={this.props.generateTestHook(item.key)}>
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

class TestApp extends React.Component<{}, ITestAppState> {
    private _handleBack = () => {
        this._navigateTo(null);
      };

    private _navigateTo = (page?: string) => {
        this.setState({testPage: page});
    };

    public render(): JSX.Element {
        if (this.state && this.state.testPage) {
            const testPage = TestModules[this.state.testPage];
            const title = testPage.title || testPage.key;
            let Testpage: any;
            if (typeof(testPage.page) === 'object' && testPage.page.default)
                Testpage = testPage.page.default;
            else
                Testpage = testPage.page;

            return (
                <View style={styles.exampleContainer}>
                    <TestableHeader onBack={this._handleBack} title={title} />                   
                    <Testpage />
                </View>
                );
        }
        return (
        <View style={styles.exampleContainer}>
            <TestableHeader title="CavyTestApp" />
            <TestableTestPageList onNavigate={this._navigateTo} list={TestPages} />
        </View>
        );
    }
} 

export default TestApp;