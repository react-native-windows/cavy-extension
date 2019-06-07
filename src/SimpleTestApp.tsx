import { useState } from 'react'
import { View, Text, Button, StyleSheet, FlatList, TouchableOpacity, TextInput } from 'react-native'
import { useCavy } from 'cavy'
import { REF_BACK_BUTTON, REF_SEARCH_BUTTON, SEARCH_BUTTON_PLACEHOLDER, TESTAPP_TITLE, BACK_BUTTON_TEXT } from './Consts';

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
    let backButton = <View />

    if (props.onBack) {
        backButton = (
            <View style={styles.headerLeft}>
                <Button title={BACK_BUTTON_TEXT} onPress={props.onBack} ref={generateTestHook(REF_BACK_BUTTON)} />
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

export interface SimpleTestAppProps {
    testPages: ITestPage[]
}

export interface ITestPage {
    key: string;
    title?: string;
    page: any;
}

interface SimpleTestPageListProps {
    testPages: ITestPage[],
    onNavigateTo: (page: string) => any
}

function SimpleTestPageList(props: SimpleTestPageListProps) {
    const generateTestHook = useCavy();
    const [filter, setFilter] = useState("");

    const data = props.testPages.filter((item) => !filter || (item.key && item.key.includes(filter)) || (item.title && item.title.includes(filter)))
    
    // @ts-ignore Binding element 'item' implicitly has an 'any' type.ts(7031)
    const _renderItem = ({ item }) => (
        <TouchableOpacity onPress={() => { props.onNavigateTo(item.key) }} ref={generateTestHook(item.key)}>
            <View>
                <Text>{item.title || item.key}</Text>
            </View>
        </TouchableOpacity>
    );

    return (
        <View>
            <TextInput placeholder={SEARCH_BUTTON_PLACEHOLDER} onChangeText={(text) => setFilter(text)} value={filter} ref={generateTestHook(REF_SEARCH_BUTTON)} />
            <FlatList<ITestPage> data={data} renderItem={_renderItem} />
        </View>)
}

interface SimpleTestPageDetailProps {
    testPage: ITestPage
}

function SimpleTestPageDetail(props: SimpleTestPageDetailProps) {
    const testPage = props.testPage

    if (typeof (testPage.page) === 'object' && testPage.page.default)
        return <testPage.page.default />
    else
        return <testPage.page />
}

export function SimpleTestApp(props: SimpleTestAppProps) {
    const [testPageKey, setTestPageKey] = useState('');

    let testModules: { [key: string]: ITestPage } = {};

    props.testPages.forEach((testPage: ITestPage) => {
        testModules[testPage.key] = testPage;
    });

    if (testPageKey.length > 0 && testModules[testPageKey]) {
        const page = testModules[testPageKey];

        return (
            <View style={styles.testPageContainer}>
                <Header onBack={() => { setTestPageKey('') }} title={page.title || page.key} />
                <SimpleTestPageDetail testPage={page} />
            </View>)
    } else {
        return (
            <View style={styles.testPageContainer}>
                <Header title={TESTAPP_TITLE} />
                <SimpleTestPageList onNavigateTo={(key: string) => { setTestPageKey(key) }} testPages={props.testPages} />
            </View>);
    }
}