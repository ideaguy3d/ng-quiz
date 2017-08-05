<?php

class DBClass
{

    /*
     *
$host_name = "db670527136.db.1and1.com";
$database = "db670527136";
$user_name = "dbo670527136";
$password = "<Enter your password here.>";

$dbh = null;
try {
  $dbh = new PDO("mysql:host=$host_name; dbname=$database;", $user_name, $password);
} catch (PDOException $e) {
  echo "Error!: " . $e->getMessage() . "<br/>";
  die();
}
     * */

    private static $DB_CONNECTIONSTRING = 'sqlite:/xampp/htdocs/ps-ng-php/m4updatedBackend/db/countries.db';
    private static $DB_USERNAME = '';
    private static $DB_PASSWORD = '';

    private static $db = null;

    protected static function connect() {
        self::$db = new PDO(self::$DB_CONNECTIONSTRING, self::$DB_USERNAME, self::$DB_PASSWORD);
    }

    public static function execute($sql, $values = array()) {
        if (self::$db === null) {
            self::connect();
        }
        $statement = self::$db->prepare($sql);
        $statement->execute($values);
        return $statement;
    }

    public static function query($sql, $values = array()) {
        $statement = self::execute($sql, $values);
        return $statement->fetchAll(PDO::FETCH_CLASS);
    }

}