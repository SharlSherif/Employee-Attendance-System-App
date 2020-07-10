import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    AppState
} from 'react-native';
import TimerMachine from 'react-timer-machine'
import moment from 'moment'

//? styles
import { styles } from '../Utils/styles'

//? helpers
import { resumeCounter } from '../helpers/Timer.helpers'

//? utils
import connectToProps from '../Utils/maps'

import { store, getKey } from '../helpers/storage'

const Timer = (props) => {
    let [isStart, setStart] = useState(false)
    let [counter, setCounter] = useState(0)

    async function getCounterResumeValue() {
        let newCounter = await resumeCounter(props)
        // console.log('new counter should be ', newCounter)
        setCounter(newCounter)
        setStart(true)
    }
    const setAppState = async () => await store('appState', AppState.currentState)

    const _handleAppStateChange = async (nextAppState) => {
      let appState = await getKey('appState', true)
      console.log('appstate is ', appState, nextAppState)
      if(nextAppState.match(/inactive|background/)) {
        //   console.log('app state is ', appState, ' should stop counter')
        console.log('should stop timer')
        //   setStart(false)
      }else
      if (
        appState.match(/inactive|background/) &&
        nextAppState === 'active'
      ) {
        // console.log('App has come to the foreground!');
        await getCounterResumeValue(props)
      }
      await store('appState', nextAppState)
    };
 
    // ? listen for changes on the app state
    AppState.addEventListener('change', _handleAppStateChange);
  
    useEffect(() => {
        console.log('mounted')
        getCounterResumeValue()
        setAppState()
        // sendNotification({ body: 'Hi', title: 'hello world!' })
        // clean up on unmounting
        return function () {
          console.log('Unmounting..')
          AppState.removeEventListener('change', _handleAppStateChange);
        }
    }, [])
    return (
        <View style={styles.timerContainer}>
            <Text style={styles.timer}>
                <TimerMachine
                    timeStart={counter}
                    started={isStart}
                    countdown={false}
                    interval={1000}
                    formatTimer={(time, ms) => {
                        let timer = ''
                        if (time.h < 1) {
                            timer += '00:'
                        }
                        if (time.m < 1 && time.h < 1) {
                            timer += '00:'
                        }
                        props.modifyCounter(ms)
                        timer += moment.duration(ms, "milliseconds").format("hh: mm: ss")
                        return timer
                        // let deconstructTimer = timer.split(':')

                        // return (
                        //   <Fragment>
                        //     <Text style={{
                        //       fontSize: 65,
                        //       fontFamily: 'Avenir',
                        //     }}>{deconstructTimer[0]}</Text>
                        //     <Text style={{ fontSize: 60, fontFamily: 'Avenir' }}>:{deconstructTimer[1]}</Text>
                        //     <Text style={{ fontSize: 55, fontFamily: 'Avenir' }}>:{deconstructTimer[2]}</Text>
                        //   </Fragment>
                        // )
                    }}
                />
            </Text>
            <View style={styles.smallContainer}>
                <Text style={{ textAlign: 'left' }}>Hours</Text>
                <Text style={{ textAlign: 'center' }}>Minutes</Text>
                <Text style={{ textAlign: 'right' }}>Seconds</Text>
            </View>
        </View>
    )
}

export default connectToProps(Timer);
