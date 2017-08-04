<?php

require_once 'DBHelper.php';
require_once 'Country.php';
require_once 'State.php';

class CountryRepository {

    public static function init() {
        DBHelper::resetDB();
        DBHelper::addCountry(
            new Country('United States', 'us', array(
                new State('California'), new State('North Dakota'), new State('Wyoming')
            )));
        DBHelper::addCountry(
            new Country('Canada', 'ca', array(
                new State('Ontario'), new State('Quebec')
            )));
        DBHelper::addCountry(
            new Country('Germany', 'de', array(
                new State('Bavaria'), new State('Berlin')
            )));
        DBHelper::addCountry(
          new Country('Austria', 'at', array(
              new State('Styria'), new State('Tyrol')
          )));
        DBHelper::addCountry(
            new Country('Luxembourg', 'lu'));
    }

    public static function getCountries() {
        return DBHelper::getCountries();
    }

    public static function getStates($countryCode) {
        return DBHelper::getStates(new Country('', $countryCode));
    }

    public static function addState($name, $countryCode) {
        return DBHelper::addState(new State($name), new Country('', $countryCode));
    }
} 