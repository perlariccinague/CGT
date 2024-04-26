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
        'players' => array(
            'inputType' => 'list',
            'label' => array('Ranking', 'Rechts auf "Neues Element" klicken'),
            'fields' => array(
                'player' => array(
                    'label' => array('Spieler', 'Beschreibung...'),
                    'inputType' => 'text',
                     'eval' => array(
                         'tl_class' => 'w50'
                     )
                ),
                'club' => array(
                    'label' => array('Heimatclub', 'Beschreibung...'),
                    'inputType' => 'text',
                    'eval' => array(
                        'tl_class' => 'w50'
                    )
                ),
                'played_tournaments' => array(
                    'label' => array('Gespielte Turniere', 'Beschreibung...'),
                    'inputType' => 'text',
                    'eval' => array(
                        'tl_class' => 'w50'
                    )

                ),
                'points' => array(
                    'label' => array('Punkte', 'Beschreibung...'),
                    'inputType' => 'text',
                    'eval' => array(
                        'tl_class' => 'w50'
                    )
                ),

            )
        )
    )
);


