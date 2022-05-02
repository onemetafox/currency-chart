<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;

use GuzzleHttp\Client;
use GuzzleHttp\Message\Request;
use GuzzleHttp\Message\Response;

class Controller extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;
    function list(){
        $client = new Client();
        try{
            $response = $client->get("https://api.monobank.ua/bank/currency")->getBody();
            $currency = json_decode($response);
        }catch ( ClientException $e){
            print_r($e);
        }
        return $currency;
    }
}
