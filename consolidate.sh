#! /usr/bin/env bash

jq -s '[.[]]' ~/lakespeed/data/*.json > ~/lakespeed/src/data.json
