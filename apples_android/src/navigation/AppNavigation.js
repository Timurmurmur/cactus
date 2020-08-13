import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator, HeaderTitle } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { Entypo, Feather } from '@expo/vector-icons';

import { LoginScreen } from '../screens/LoginScreen';
import { ProfileScreen } from '../screens/ProfileScreen';
import { MainScreen } from '../screens/MainScreen';
import { CatalogScreen } from '../screens/CatalogScreen';
import { ItemsScreen } from '../screens/ItemsScreen';
import { ItemModelScreen } from '../screens/ItemModelScreen';
import { CharacteristicScreen } from '../screens/CharacteristicScreen';
import { ItemScreen } from '../screens/ItemScreen';
import { ActionScreen } from '../screens/ActionScreen';
import { ComparisonScreen } from '../screens/ComparisonScreen';
import { OrderScreen } from '../screens/OrderScreen';
import { BonusScreen } from '../screens/BonusScreen';
import { FavoritesScreen } from '../screens/FavoritesScreen';
import { NotificationsScreen } from '../screens/NotificationsScreen';
import { ShopScreen } from '../screens/ShopScreen';
import { NewsScreen } from '../screens/NewsScreen';
import { FullNewsScreen } from '../screens/FullNewsScreen';
import { SettingsScreen } from '../screens/SettingsScreen';
import { ShoppingBacketScreen } from '../screens/ShoppingBacketScreen';
import { InstallmentScreen } from '../screens/InstallmentScreen';
import { BankScreen } from '../screens/BankScreen';
import { RegisterScreen } from '../screens/RegisterScreen';
import { DeliveryScreen } from '../screens/DeliveryScreen';
import { MapScreen } from '../screens/MapScreen';
import { OrderListScreen } from '../screens/OrderListScreen';

import { AppDrawerLable } from '../components/ui/AppDrawerLable';
import { AppDrawerContent } from '../components/ui/AppDrawerContent';
import { IconRight } from '../components/IconRight';

const MenuNavigator = createDrawerNavigator();

const LoginStack = createStackNavigator();
const ProfileStack = createStackNavigator();
const MainStack = createStackNavigator();
const CatalogStack = createStackNavigator();
const ItemsStack = createStackNavigator();
const ItemStack = createStackNavigator();
const ItemModelStack = createStackNavigator();
const CharacteristicStack = createStackNavigator();
const ActionStack = createStackNavigator();
const ComparisonStack = createStackNavigator();
const OrderStack = createStackNavigator();
const BonusStack = createStackNavigator();
const FavoritesStack = createStackNavigator();
const NotificationsStack = createStackNavigator();
const ShopStack = createStackNavigator();
const NewsStack = createStackNavigator();
const FullNewsStack = createStackNavigator();
const SettingsStack = createStackNavigator();
const ShoppingBacketStack = createStackNavigator();
const InstallmentStack = createStackNavigator();
const BankStack = createStackNavigator();
const RegisterStack = createStackNavigator();
const DeliveryStack = createStackNavigator();
const MapStack = createStackNavigator();
const OrderListStack = createStackNavigator();


const nameToUppercase = name => name.toUpperCase();

const loginStack = ({ navigation }) => (
  <LoginStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: '#fff',
      },
      headerTintColor: '#000'
    }}
  >
    <LoginStack.Screen
      name='Login'
      component={LoginScreen}
      options={{
        headerLeft: () => (<Feather name='arrow-left' size={25} color={'#60B6FF'} onPress={() => navigation.navigate('Главная')} style={{ paddingLeft: 16 }} />),
        headerTitle: null
      }}
    />
    <ProfileStack.Screen
      name='Профиль'
      component={ProfileScreen}
      options={{
        headerLeft: () => (<Entypo name='menu' size={30} onPress={() => navigation.openDrawer()} style={{ paddingLeft: 16 }} />),
        headerTitle: nameToUppercase('Профиль')
      }}
    />
  </LoginStack.Navigator>
)

const mainStack = ({ navigation }) => (
  <MainStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: '#fff',
      },
      headerTintColor: '#000'
    }}
  >
    <MainStack.Screen
      name="Главная"
      component={MainScreen}
      options={{
        headerLeft: () => (<Entypo name='menu' size={30} onPress={() => navigation.openDrawer()} style={{ paddingLeft: 16 }} />),
        headerRight: () => <IconRight onPress={() => navigation.navigate('ShoppingBacket')} />
      }}
    />
    <ItemsStack.Screen
      name='Items'
      component={ItemsScreen}
      options={({ route }) => ({ title: route.params.item.label.toUpperCase() })}
    />
    <ShoppingBacketStack.Screen
      name='ShoppingBacket'
      component={ShoppingBacketScreen}
      options={{
        headerTitle: nameToUppercase('Корзина'),
        headerRight: null
      }}
    />
    <InstallmentStack.Screen
      name='Installment'
      component={InstallmentScreen}
      options={{
        headerTitle: nameToUppercase('Выбор рассрочки'),
        headerRight: null
      }}
    />
    <BankStack.Screen
      name='Bank'
      component={BankScreen}
      options={({ route }) => ({ title: route.params.name.toUpperCase() + ' ' + route.params.period })}
    />
    <RegisterStack.Screen
      name='Register'
      component={RegisterScreen}
      options={{
        headerTitle: nameToUppercase('Оформление заказа'),
        headerRight: null
      }}
    />
    <DeliveryStack.Screen
      name='Delivery'
      component={DeliveryScreen}
      options={{
        headerTitle: nameToUppercase('Способ доставки'),
        headerRight: null,

      }}
    />
    <MapStack.Screen
      name='Map'
      component={MapScreen}
      options={{
        headerRight: null
      },
        ({ route }) => ({ title: nameToUppercase(route.params.title) })
      }
    />
    <OrderListStack.Screen
      name='OrderList'
      component={OrderListScreen}
      options={{
        headerTitle: nameToUppercase('Состав заказа'),
        headerRight: null
      }}
    />
  </MainStack.Navigator>
)

const catalogStack = ({ navigation }) => (
  <CatalogStack.Navigator
    screenOptions={{
      headerRight: () => <IconRight onPress={() => navigation.navigate('ShoppingBacket')} />
    }}
  >
    <CatalogStack.Screen
      name={nameToUppercase('Каталог')}
      component={CatalogScreen}
      options={{
        headerLeft: () => (<Entypo name='menu' size={30} onPress={() => navigation.openDrawer()} style={{ paddingLeft: 16 }} />)
      }}
    />
    <ItemsStack.Screen
      name='Items'
      component={ItemsScreen}
      options={({ route }) => ({ title: route.params.item.label.toUpperCase() })}
    />
    <ItemStack.Screen
      name='Item'
      component={ItemScreen}
      options={({ route }) => ({ title: route.params.item.label.toUpperCase() })}
    />
    <ItemModelStack.Screen
      name='ItemModel'
      component={ItemModelScreen}
      options={{
        headerTitle: nameToUppercase('Каталог')
      }}
    />
    <CharacteristicStack.Screen
      name='Characteristic'
      component={CharacteristicScreen}
      options={{
        headerTitle: nameToUppercase('Характеристики')
      }}
    />
    <ShoppingBacketStack.Screen
      name='ShoppingBacket'
      component={ShoppingBacketScreen}
      options={{
        headerTitle: nameToUppercase('Корзина'),
        headerRight: null
      }}
    />
    <InstallmentStack.Screen
      name='Installment'
      component={InstallmentScreen}
      options={{
        headerTitle: nameToUppercase('Выбор рассрочки'),
        headerRight: null
      }}
    />
    <BankStack.Screen
      name='Bank'
      component={BankScreen}
      options={({ route }) => ({ title: route.params.name.toUpperCase() })}
    />
    <RegisterStack.Screen
      name='Register'
      component={RegisterScreen}
      options={{
        headerTitle: nameToUppercase('Оформление заказа')
      }}
    />
    <DeliveryStack.Screen
      name='Delivery'
      component={DeliveryScreen}
      options={{
        headerTitle: nameToUppercase('Способ доставки'),
        headerRight: null
      }}
    />
    <MapStack.Screen
      name='Map'
      component={MapScreen}
      options={{
        headerRight: null
      },
        ({ route }) => ({ title: nameToUppercase(route.params.title) })
      }
    />
    <OrderListStack.Screen
      name='OrderList'
      component={OrderListScreen}
      options={{
        headerTitle: nameToUppercase('Состав заказа'),
        headerRight: null
      }}
    />
  </CatalogStack.Navigator>
)


const actionStack = ({ navigation }) => (
  <ActionStack.Navigator>
    <ActionStack.Screen
      name={nameToUppercase("Акции")}
      component={ActionScreen}
      options={{
        headerLeft: () => (<Entypo name='menu' size={30} onPress={() => navigation.openDrawer()} style={{ paddingLeft: 16 }} />)
      }}
    />
  </ActionStack.Navigator>
)

const comparisonStack = ({ navigation }) => (
  <ComparisonStack.Navigator>
    <ComparisonStack.Screen
      name={nameToUppercase("Сравнение товаров")}
      component={ComparisonScreen}
      options={{
        headerLeft: () => (<Entypo name='menu' size={30} onPress={() => navigation.openDrawer()} style={{ paddingLeft: 16 }} />)
      }}
    />
  </ComparisonStack.Navigator>
)

const orderStack = ({ navigation }) => (
  <OrderStack.Navigator>
    <OrderStack.Screen
      name={nameToUppercase("Мои заказы")}
      component={OrderScreen}
      options={{
        headerLeft: () => (<Entypo name='menu' size={30} onPress={() => navigation.openDrawer()} style={{ paddingLeft: 16 }} />)
      }}
    />
  </OrderStack.Navigator>

)

const bonusStack = ({ navigation }) => (
  <BonusStack.Navigator>
    <BonusStack.Screen
      name={nameToUppercase("Мои бонусы")}
      component={BonusScreen}
      options={{
        headerLeft: () => (<Entypo name='menu' size={30} onPress={() => navigation.openDrawer()} style={{ paddingLeft: 16 }} />)
      }}
    />
  </BonusStack.Navigator>
)

const favoritesStack = ({ navigation }) => (
  <FavoritesStack.Navigator>
    <FavoritesStack.Screen
      name={nameToUppercase("Избранное")}
      component={FavoritesScreen}
      options={{
        headerLeft: () => (<Entypo name='menu' size={30} onPress={() => navigation.openDrawer()} style={{ paddingLeft: 16 }} />)
      }}
    />
  </FavoritesStack.Navigator>
)

const notificationsStack = ({ navigation }) => (
  <NotificationsStack.Navigator>
    <NotificationsStack.Screen
      name={nameToUppercase("Уведомления")}
      component={NotificationsScreen}
      options={{
        headerLeft: () => (<Entypo name='menu' size={30} onPress={() => navigation.openDrawer()} style={{ paddingLeft: 16 }} />)
      }}
    />
  </NotificationsStack.Navigator>
)

const shopStack = ({ navigation }) => (
  <ShopStack.Navigator>
    <ShopStack.Screen
      name={nameToUppercase("Магазины")}
      component={ShopScreen}
      options={{
        headerLeft: () => (<Entypo name='menu' size={30} onPress={() => navigation.openDrawer()} style={{ paddingLeft: 16 }} />)
      }}
    />
  </ShopStack.Navigator>
)

const newsStack = ({ navigation }) => (
  <NewsStack.Navigator>
    <NewsStack.Screen
      name={nameToUppercase("Новости")}
      component={NewsScreen}
      options={{
        headerLeft: () => (<Entypo name='menu' size={30} onPress={() => navigation.openDrawer()} style={{ paddingLeft: 16 }} />)
      }}
    />
    <NewsStack.Screen
      name={'FullNews'}
      component={FullNewsScreen}
      options={{
        // headerLeft: () => (<Entypo name='menu' size={30} onPress={() => navigation.openDrawer()} />),
        headerTitle: nameToUppercase('Новости')
      }}
    />
  </NewsStack.Navigator>
)

const settingsStack = ({ navigation }) => (
  <SettingsStack.Navigator>
    <SettingsStack.Screen
      name={nameToUppercase("Настройки")}
      component={SettingsScreen}
      options={{
        headerLeft: () => (<Entypo name='menu' size={30} onPress={() => navigation.openDrawer()} />)
      }}
    />
  </SettingsStack.Navigator>
)



export default function AppNavigator() {

  return (
    <NavigationContainer>
      <MenuNavigator.Navigator
        initialRouteName="Главная"
        drawerContent={(props) => (<AppDrawerContent {...props} />)}
      >
        <MenuNavigator.Screen
          name="Войти в личный кабинет"
          component={loginStack}
          options={{
            drawerLabel: () => (
              <AppDrawerLable source={require('../../assets/icons/user.png')}>Войти в личный кабинет</AppDrawerLable>
            )
          }}
        />
        <MenuNavigator.Screen
          name="Главная"
          component={mainStack}
          options={{ drawerLabel: () => <AppDrawerLable source={require('../../assets/icons/home.png')}>Главная</AppDrawerLable> }}
        />
        <MenuNavigator.Screen
          name="Каталог"
          component={catalogStack}
          options={{ drawerLabel: () => <AppDrawerLable source={require('../../assets/icons/catalog.png')}>Каталог</AppDrawerLable> }}
        />
        <MenuNavigator.Screen
          name="Акции"
          component={actionStack}
          options={{ drawerLabel: () => <AppDrawerLable source={require('../../assets/icons/action.png')}>Акции</AppDrawerLable> }}
        />
        <MenuNavigator.Screen
          name="Сравнение товаров"
          component={comparisonStack}
          options={{ drawerLabel: () => <AppDrawerLable source={require('../../assets/icons/comparison.png')}>Сравнение товаров</AppDrawerLable> }}
        />
        <MenuNavigator.Screen
          name="Мои заказы"
          component={orderStack}
          options={{ drawerLabel: () => <AppDrawerLable source={require('../../assets/icons/order.png')}>Мои заказы</AppDrawerLable> }}
        />
        <MenuNavigator.Screen
          name="Мои бонусы"
          component={bonusStack}
          options={{ drawerLabel: () => <AppDrawerLable source={require('../../assets/icons/bonus.png')}>Мои бонусы</AppDrawerLable> }}
        />
        <MenuNavigator.Screen
          name="Избранное"
          component={favoritesStack}
          options={{ drawerLabel: () => <AppDrawerLable source={require('../../assets/icons/favorites.png')}>Избранное</AppDrawerLable> }}
        />
        <MenuNavigator.Screen
          name="Уведомления"
          component={notificationsStack}
          options={{ drawerLabel: () => <AppDrawerLable source={require('../../assets/icons/notifications.png')}>Уведомления</AppDrawerLable> }}
        />
        <MenuNavigator.Screen
          name="Магазины"
          component={shopStack}
          options={{ drawerLabel: () => <AppDrawerLable source={require('../../assets/icons/shop.png')}>Магазины</AppDrawerLable> }}
        />
        <MenuNavigator.Screen
          name="Новости"
          component={newsStack}
          options={{ drawerLabel: () => <AppDrawerLable source={require('../../assets/icons/news.png')}>Новости</AppDrawerLable> }}
        />
        <MenuNavigator.Screen
          name="Настройки"
          component={settingsStack}
          options={{ drawerLabel: () => <AppDrawerLable source={require('../../assets/icons/settings.png')}>Настройки</AppDrawerLable> }}
        />
      </MenuNavigator.Navigator>
    </NavigationContainer>
  );
}

