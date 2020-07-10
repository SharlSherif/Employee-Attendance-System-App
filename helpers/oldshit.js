<View>
<TouchableOpacity style={styles.form} onPress={() => Keyboard.dismiss()} activeOpacity={1.0}>
    {!isError && !isSuccess &&
        <View>
            <Image style={{
                height: isKeyboard ? 292 : 300,
                top: 0,
                position: 'absolute',
                width: '100%',
                borderRadius: 5,
                alignSelf: 'center'
            }} source={require('../assets/images/login.png')}></Image>
            <View style={{
                position: 'absolute',
                // bottom: '10%',
                top: isKeyboard ? '60%' : '78%',
                backgroundColor: 'white',
                width: '100%'
            }}>
                <InputField
                    InputStyle={{ width: '85%', alignSelf: 'center' }}
                    label="Company Code"
                    keyboardType='default'
                    onChangeText={(x) => setCompanyCode(x)}
                    value={companyCode}
                    isError={isError} />
                <InputField
                    InputStyle={{ width: '85%', alignSelf: 'center' }}
                    label="Employee Number"
                    keyboardType='default'
                    secureTextEntry={true}
                    onChangeText={(x) => setEmployeeNumber(x)}
                    value={employeeNumber}
                    isError={isError} />

               
            </View>
        </View>
    }

    {/* show error message */}
    {isError && <ErrorMessage setError={() => setError(false)} />}

    {isSuccess && <SuccessMessage Continue={() => { setSuccess(false); props.navigation.navigate('App'); }} user={props.user} />}
</TouchableOpacity >
<HelpSection />
</View>