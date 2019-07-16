<template>
    <v-container fluid grid-list-md> <!-- gird-list-md는 마진을 준다 -->
        <v-layout row wrap> <!-- wrap 글씨를 내림-->
            <v-flex xs12 sm6 md4 v-for="i in 9" :key ="i">
                <v-card color="blue">
                    <v-card-title primary-title v-if="!$vuetify.breakpoint.xs">
                        {{$vuetify.breakpoint}}
                    </v-card-title>
                    <v-card-text>
                        asldfjasldfjlnxcz,sdf adfa sdfasdfsdfsdfsd fsd fs dfsdfsdfs dfs d sdf sdf sdf sdf sdf sdf sdfsd f sdf cccccccccccccccccccccccccccccccccccccccccccc cccccccccccccccccccccccccccccccccccccccccccccccc ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccxcv xcv ser werwe sdf sd avnlskdfjlsdksadas asd asd asdasd asda sdasd asd asdjfxcnv lsdjflsdjflxcnm dlskfjlsdfj
                    </v-card-text>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>
