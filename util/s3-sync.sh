echo "############################################################################"
echo "## Syncing files to S3 bucket - gfwpro-site-assets/js                     ##"
echo "## Make sure you provide correct AWS PROFILE --profile [your_aws_profile] ##"
echo "############################################################################"
echo "## aws s3 sync \                          ##"
echo "##   ./dist s3://gfwpro-site-assets/js \  ##"
echo "##   --exclude '*.DS_Store' \             ##"
echo "##   --exclude '*.html' \                 ##"
echo "##   --profile gfw_pro                    ##"
echo "############################################"
aws s3 sync \
  ./dist s3://gfwpro-site-assets/js \
  --exclude '*.DS_Store' \
  --exclude '*.html' \
  --profile gfw_pro
