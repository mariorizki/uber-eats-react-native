import { View, Text, SafeAreaView, ScrollView } from "react-native";
import React, { useState, useEffect } from "react";
import HeaderTabs from "../components/HeaderTabs";
import SearchBar from "../components/SearchBar";
import Categories from "../components/Categories";
import RestaurantItems, {
  localRestaurants,
} from "../components/RestaurantItems";

const YELP_API_KEY =
  "q546IGLxcdq9QQNX0fp12a5fUaw17tNN0OLRFbd9xjlbEeuNeuR8cXNF5YKcvCCLQtEL5JSl7ln8_GkBq5TaJkWDRZMPJgn-mo2JNf8L65uqwaF7sBdKeOIcikp_Y3Yx  ";
const Home = () => {
  const [restaurantData, setRestaurantData] = useState([]);
  const [loading, setLoading] = useState(true);

  const getRestaurantsFromYelp = () => {
    const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=SanDiego`;

    const apiOptions = {
      headers: {
        Authorization: `Bearer ${YELP_API_KEY}`,
      },
    };

    return fetch(yelpUrl, apiOptions)
      .then((res) => res.json())
      .then((json) => {
        setRestaurantData(json.businesses);
        setLoading(false);
      });
  };

  useEffect(() => {
    getRestaurantsFromYelp();
  }, []);

  console.log(restaurantData);

  return (
    <SafeAreaView style={{ backgroundColor: "#eee", flex: 1 }}>
      <View style={{ backgroundColor: "#fff", padding: 15 }}>
        <HeaderTabs />
        <SearchBar />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories />
        {loading ? (
          <View style={{ alignItems: "center", marginTop: 40 }}>
            <Text
              style={{
                fontSize: 30,
              }}
            >
              Loading....
            </Text>
          </View>
        ) : (
          <RestaurantItems restaurantData={restaurantData} />
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
