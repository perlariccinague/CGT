<?php
return array(
    'label' => array('Rangliste', 'Meine Beschreibung...'),
    'types' => array('content', 'module'),
    'contentCategory' => 'texts',
    'moduleCategory' => 'miscellaneous',
    'beTemplate' => 'be_wildcard',
    'standardFields' => array('headline', 'cssID'),
    'wrapper' => array(
        'type' => 'none',
    ),
    'fields' => array(
        'player' => array(
            'label' => array('Spieler', 'Beschreibung...'),
            /*'eval' => array('rte' => 'tinyMCE'),*/
            'inputType' => 'text',
        ),
        'played_tournaments' => array(
            'label' => array('Gespielte Turniere', 'Beschreibung...'),
          /*  'eval' => array('rte' => 'tinyMCE'),*/
            'inputType' => 'text',

        ),
        'dots' => array(
            'label' => array('Punkte', 'Beschreibung...'),
            /*'eval' => array('rte' => 'tinyMCE'),*/
            'inputType' => 'text',

        ),
    ),
);


