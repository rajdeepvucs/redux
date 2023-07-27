import { View, Text } from 'react-native'
import React from 'react'
import {connect} from 'react-redux'
import { StoreState } from '../../Models/reduxModel'

const Login = (props: any) => {
    console.log(props);
    
  return (
    <View>
      <Text>index</Text>
    </View>
  )
}

const mapStateToProps = (state: StoreState, ownProps: any)=>{
    return {
        user: state.user.user_detail
    }
}
const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Login)