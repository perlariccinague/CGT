<?php
return array(
    'label' => array('Standorte', 'Meine Beschreibung...'),
    'types' => array('content', 'module'),
    'contentCategory' => 'texts',
    'moduleCategory' => 'miscellaneous',
    'beTemplate' => 'be_wildcard',
    'standardFields' => array('headline', 'cssID'),
    'wrapper' => array(
        'type' => 'none',
    ),
    'fields' => array(
        'text' => array(
            'label' => array('Title', 'Beschreibung...'),
            'inputType' => 'text',
        ),
        'xCoords' => array(
            'label' => array('Geolocation X'),
            'inputType' => 'text',
        ),
        'yCoords' => array(
            'label' => array('Geolocation Y'),
            'inputType' => 'text',
        ),
    ),
);




