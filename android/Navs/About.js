const AboutScreen=navigation=>{
    return (
        <View>
            <Text  style={{flex:1, alignItems: 'center', justifyContent: 'center'}}>Detail Screen</Text>
            <Button title='go to about again' onPress={()=>{navigation.push('About')}}></Button> 
            <Button title='go to home' onPress={navigation.navigate('Home')}></Button>
            <Button title='go back' onPress={()=>navigation.goBack()}></Button>
            <Button title='go back to first screen in stack' onPress={()=>{navigation.popToTop()}}></Button>
        </View>
    )
}
export default AboutScreen