#! /usr/bin/env bash

speedtest -f json-pretty > ~/lakespeed/data/$(date +%Y%m%d%H%M%S).json
