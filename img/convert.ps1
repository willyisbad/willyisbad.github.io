$Source = Get-ChildItem ".\*.png"
$Destination = ".\"


ForEach ($files in $Source) {
    cwebp $files -q 85 -m 6 -o $($Destination + $files.BaseName + ".webp")
}


$Source2 = Get-ChildItem ".\*.jpg"


ForEach ($files2 in $Source2) {
    cwebp $files2 -q 85 -m 6 -o $($Destination + $files2.BaseName + ".webp")
}

$Source3 = Get-ChildItem ".\*.jpeg"


ForEach ($files3 in $Source3) {
    cwebp $files3 -q 85 -m 6 -o $($Destination3 + $files3.BaseName + ".webp")
}
