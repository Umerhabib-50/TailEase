import React, {useState} from 'react';
import {Image, View, ScrollView, TouchableOpacity} from 'react-native';
import {ReportDetailStyle} from './homeStyle/report_Details.style';
import {Text} from 'react-native-paper';
import {COLORS} from '../../constant';
import {CustomButton} from '../../components';

export const ReportDetailsScreen = () => {
  const arr = [1, 2, 3];
  const text =
    'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia amet, quasi saepe sint nihil incidunt consequatur adipisci cum temporibus reiciendis inventore est magni, harum, eius corruptineque id dolorum vitae.';

  const [isExpanded, setIsExpanded] = useState(false);

  const toggleTextExpansion = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <View style={ReportDetailStyle.container}>
      <View style={ReportDetailStyle.image_sec}>
        <Image
          style={ReportDetailStyle.dic_img}
          source={require('../../assets/doc.png')}
        />
      </View>
      <View style={ReportDetailStyle.white_sec_con}>
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{paddingBottom:10}}>
          <View style={ReportDetailStyle.name_verify_con}>
            <Text variant="headlineSmall">Umer Habib</Text>
            <View style={ReportDetailStyle.verify}>
              <Text variant="labelMedium" style={{color: 'green'}}>
                Verified
              </Text>
            </View>
          </View>

          <View style={ReportDetailStyle.card_con}>
            {arr.map((item, index) => (
              <View style={ReportDetailStyle.card} key={index}>
                <Text style={{color: COLORS.purple}}>Distance</Text>
                <Text style={{fontSize: 18}}>10 km</Text>
              </View>
            ))}
          </View>

          <View style={ReportDetailStyle.disc_con}>
            <Text style={{fontWeight: 'bold', fontSize: 18}}>Description</Text>
            <View style={{flexDirection: 'row', paddingVertical: 10}}>
              <Text style={{lineHeight: 25}}>
                {isExpanded ? text : text.slice(0, 100)}
                {text.length > 100 && (
                  <TouchableOpacity
                    onPress={toggleTextExpansion}
                    style={{position: 'relative'}}>
                    <Text
                      style={{
                        fontWeight: 'bold',
                        position: 'absolute',
                        top: -16,
                        left: 6,
                      }}>
                      {isExpanded ? 'Show Less' : 'Show More'}
                    </Text>
                  </TouchableOpacity>
                )}
              </Text>
            </View>
          </View>

          <View style={ReportDetailStyle.map}>
            <Text>MAP</Text>
          </View>
          <CustomButton style={{marginTop: 20}} title={'Go To Maps'} />
        </ScrollView>
      </View>
    </View>
  );
};
