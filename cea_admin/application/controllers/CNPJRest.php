<?php
defined('BASEPATH') OR exit('No direct script access allowed');

require APPPATH . 'libraries\REST_Controller.php';
require_once 'vendor/autoload.php';

class CNPJRest extends REST_Controller {
  var $api_url = 'http://www.receitaws.com.br/v1/cnpj/';
  var $api_headers = array('Accept' => 'application/json');

  function __construct() {
    parent::__construct();
  }

  public function index_get() {
    $cnpj = $this->get('cnpj');

    if ($cnpj == null) {
      $this->response(NULL, REST_Controller::HTTP_BAD_REQUEST);
    }

    $response = Unirest\Request::get($this->api_url.$cnpj, $this->api_headers);

    $this->response($response->body, $response->code);
  }

}
